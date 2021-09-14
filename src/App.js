import React from 'react';
import styled from 'styled-components';
import { colors } from './constants/colors';
import Counter from './components/Counter';
import Search from './components/Search';
import GenreToggle from './components/GenreToggle';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.grayDark};
`;

const App = () => {
  return (
    <Container>
      <Counter/>
      <Search/>
      <GenreToggle/>
    </Container>
  );
}

export default App;
