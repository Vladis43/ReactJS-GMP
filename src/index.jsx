import React from 'react';
import { render } from 'react-dom';
import '@styles/styles';
import '@styles/scss.scss';
import './babel';

const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <br/>
    <div className="logo"/>
    <hr/>
    <div className="box">
      <h2>Sass</h2>
    </div>
  </div>
);

render(<App/>, document.getElementById('app'));