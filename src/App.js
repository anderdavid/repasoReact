import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import TestRedux from './components/test-redux/TestRedux';
import IceCreamContainer from './components/test-redux/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <TestRedux/>
       <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
