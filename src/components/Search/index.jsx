import React from 'react';
import { Container, Input } from './styles';
import Button from '../ui/Button';

const Search = () => {
  const [value, setValue] = React.useState('');

  const _handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleClickSearch();
    }
  };

  const handleInputChange = e => setValue(e.target.value);

  const handleClickSearch = () => {
    if (value) {
      console.log({ search: value });
      setValue('');
    }
  };

  return (
    <Container>
      <Input
        placeholder="What do you want to watch?"
        value={value}
        onChange={handleInputChange}
        onKeyDown={_handleKeyDown}
      />
      <Button primary onClick={handleClickSearch}>Search</Button>
    </Container>
  );
};

export default Search;