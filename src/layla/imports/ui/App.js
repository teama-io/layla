import React from 'react';
import Hello from './Hello';
import Info from './Info';
import './tailwind/tailwind.css';
import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);

export default App;
