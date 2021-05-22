import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { FaSearch } from 'react-icons/fa';
import { SearchForm } from './styles';
import { navigate, useLocation } from '@reach/router';
import { navigate as gatNav } from 'gatsby';
import queryString from 'query-string';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';

  const handleSubmit = e => {
    e.preventDefault();

    if (c) {
      gatNav(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else {
      gatNav(`/all-products?s=${encodeURIComponent(searchTerm)}`);
    }
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
        placeholder="Search"
      />
      <Button>
        <FaSearch />
      </Button>
    </SearchForm>
  );
}
