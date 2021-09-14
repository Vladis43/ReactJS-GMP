import React from 'react';
import { Container, Count } from './styles';
import Button from '../ui/Button';

const Counter = () => {
  const [value, setValue] = React.useState(0);

  const increment = () => setValue(prevState => prevState + 1);
  const decrement = () => setValue(prevState => prevState - 1);

  return React.createElement(Container, null,
    React.createElement(Button, { primary: true, onClick: decrement }, '-'),
    React.createElement(Count, null, value),
    React.createElement(Button, { primary: true, onClick: increment }, '+'),
  );
};

export default Counter;