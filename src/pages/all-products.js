import React, { useContext } from 'react';
import { Layout, Filters, ProductsGrid, SEO } from 'components';
import ProductContext from '../context/ProductContext';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

export default function AllProducts() {
  const { products, collections } = useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};
  const searchTerm = qs.s;

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }
    return true;
  };

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }
    return true;
  };
  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);
  return (
    <Layout>
      <SEO
        description={'Browse all of Hat Attack'}
        title={'Hat Attack Products'}
      />
      {!!searchTerm && !!filteredProducts.length && (
        <h3>
          Search term: <strong>'{searchTerm}'</strong>
        </h3>
      )}
      {!!filteredProducts.length && <h4>{filteredProducts.length} products</h4>}

      <Content>
        <Filters />
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>Heckin Bamboozled! No matches for</span>
              &nbsp;
              <strong>'{searchTerm}'</strong>
            </h3>
            <div>
              Here are some tips:
              <br />
              <br />
              <br />
              <ul>
                <li>Don't be weird</li>
                <li>Search for real things</li>
                <li>We don't sell Graphics Cards</li>
                <li>Unplug the search bar and reboot</li>
                <li>Check your spelling</li>
              </ul>
            </div>
          </div>
        )}
        {!!filteredProducts.length && (
          <div>
            <ProductsGrid products={filteredProducts} />
          </div>
        )}
      </Content>
    </Layout>
  );
}
