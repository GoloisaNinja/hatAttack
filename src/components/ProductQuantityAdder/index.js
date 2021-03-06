import React, { useState, useContext } from 'react';
import { ProductQuantityAdderWrapper } from './styles';
import { Button } from '../Button';
import { Input } from '../Input';
import CartContext from '../../context/CartContext';

export function ProductQuantityAdder({ variantId, available, handleModal }) {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
    handleModal({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form>
        <Input
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button
          type="submit"
          disabled={!available}
          onClick={handleSubmit}
          fullWidth
        >
          Add to cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
}
