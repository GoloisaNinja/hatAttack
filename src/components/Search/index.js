import React from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { FaSearch } from 'react-icons/fa';
import { SearchForm } from './styles';

export function Search() {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <SearchForm onSubmit={onSubmit}>
      <Input placeholder="Search" />
      <Button>
        <FaSearch />
      </Button>
    </SearchForm>
  );
}
