import React, { Component } from 'react';
import './style.css';
import OrderList from '../OrderList';
import Header from '../Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <OrderList />
      </div>
    );
  }
}

export default App;
