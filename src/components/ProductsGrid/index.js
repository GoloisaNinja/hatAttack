import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';

export function ProductsGrid({ products }) {
  return (
    <ProductsGridWrapper>
      {products.map(product => (
        <ProductTile
          key={product.shopifyId}
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          title={product.title}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          description={product.description}
        />
      ))}
    </ProductsGridWrapper>
  );
}
