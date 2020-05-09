import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './components/App';

// import './index.css';

const render = (Component) =>
  ReactDom.render(<Component />, document.getElementById('root'));

render(hot(App));