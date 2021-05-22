import React from 'react';
import { HeaderWrapper } from './styles';
import { Cart } from '../Cart';
import { Logo, Search } from 'components';
import { Link } from 'gatsby';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Cart />
      </div>
      <div>
        <Search />
      </div>
    </HeaderWrapper>
  );
}
