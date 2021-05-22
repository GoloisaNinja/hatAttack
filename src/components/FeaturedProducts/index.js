import React, { useContext } from 'react';
import { ProductsGrid } from '../ProductsGrid';
import ProductContext from '../../context/ProductContext';

export function FeaturedProducts() {
  const { collections } = useContext(ProductContext);
  const featuredCollection = collections.find(
    collection => collection.title === 'Featured Hats'
  );
  return (
    <section>
      <h1>Featured Hats</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
