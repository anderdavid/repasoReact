import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Repaso1 from './components/Repaso1'
import Repaso2 from './components/Repaso2'
import Home from './components/Home'
import NavBar from './components/NavBar'



function App() {
  return (
    
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
        </Switch>
     </div>
      </BrowserRouter>
    
   );
}

export default App;
