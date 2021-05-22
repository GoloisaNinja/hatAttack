import React, { useContext } from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../context/CartContext';

export function Cart() {
  const { checkout } = useContext(CartContext);
  let totalQuanity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => (totalQuanity += lineItem.quantity));
  }
  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <div>
        {totalQuanity} item(s) / ${checkout?.totalPrice || '0.00'}
      </div>
    </CartWrapper>
  );
}
