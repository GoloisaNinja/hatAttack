import React, { useContext } from 'react';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FiltersWrapper } from './styles';
import ProductContext from '../../context/ProductContext';

export function Filters() {
  const { collections } = useContext(ProductContext);

  return (
    <FiltersWrapper>
      <strong>Categories</strong>
      {collections.map(collection => (
        <CategoryFilterItem
          title={collection.title}
          id={collection.shopifyId}
          key={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
}
