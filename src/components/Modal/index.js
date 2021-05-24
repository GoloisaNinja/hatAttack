import React from 'react';
import { Button } from '../Button';
import { ModalWrapper, ModalOverlay } from './styles';

export function Modal({ dismiss, content }) {
  return (
    <>
      <ModalWrapper>
        <h4>Added to cart!</h4>
        <h5>{content.product}</h5>
        <h5>{content.addedVariant}</h5>
        <h6>Qty: {content.quantity}</h6>
        <Button onClick={dismiss}>Dismiss</Button>
      </ModalWrapper>
      <ModalOverlay></ModalOverlay>
    </>
  );
}
