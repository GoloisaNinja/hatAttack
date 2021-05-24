import React, { useContext } from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../context/CartContext';
import { SEO } from '../SEO';

export function Cart() {
  const { checkout } = useContext(CartContext);
  let totalQuanity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => (totalQuanity += lineItem.quantity));
  }
  return (
    <CartWrapper>
      <SEO description={'Checkout at Hat Attack'} title={'Hat Attack Cart'} />
      <FaShoppingCart size="1.5em" />
      <div>{totalQuanity}</div>
      <div>
        {totalQuanity} item(s) / ${checkout?.totalPrice || '0.00'}
      </div>
    </CartWrapper>
  );
}
