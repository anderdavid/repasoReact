import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import TestRedux from './components/test-redux/TestRedux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <TestRedux/>
      </div>
    </Provider>
  );
}

export default App;
