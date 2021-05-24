import React, { useContext } from 'react';
import {
  Layout,
  SEO,
  HomePageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <Layout>
      <SEO description={'Wear Hat Attack hats'} title={'Hat Attack Homepage'} />
      <HomePageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured Hats'
        )}
      />
      {collections.find(collection => collection.title === 'Featured Hats') && (
        <FeaturedProducts />
      )}
    </Layout>
  );
};

export default IndexPage;
