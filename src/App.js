import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Repaso1 from './components/Repaso1'
import Repaso2 from './components/Repaso2'
import Home from './components/Home'
import TestGet from './components/conectividad/TestGet'
import TestPost from './components/conectividad/TestPost'
import NavBar from './components/NavBar'
import TestRedux from './components/test-redux/TestRedux';
import IceCreamContainer from './components/test-redux/IceCreamContainer';
import UserRedux from './components/test-redux/UserRedux';



function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
      <div>
          <NavBar></NavBar>
          <Switch>
          <Route
              exact
              path="/"
              render={()=><Home/>}
            />
            <Route
              exact
              path="/repaso1"
              render={()=><Repaso1/>}
            />
            <Route
              exact
              path="/repaso2"
              render={()=><Repaso2/>}
            />
            <Route
              exact
              path="/testGet"
              render={()=><TestGet/>}
            />
            <Route
              exact
              path="/testPost"
              render={()=><TestPost/>}
            />
             <Route
              exact
              path="/testRedux"
              render={()=>
                <div className="App">
                  <TestRedux/>
                  <IceCreamContainer/>
                </div> }
              />
            <Route
              exact
              path="/userContainer"
              render={()=><UserRedux/>}
            />
           
          </Switch>
      </div>
      </BrowserRouter> 
    </Provider>
   );
}

export default App;
