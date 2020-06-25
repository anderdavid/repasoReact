import React from 'react';
import MenuResponsive from './components/estilisados/MenuResponsive'
import UserContainer from './components/test-redux/UserContainer';
import {Provider} from 'react-redux'
import store from './redux/store'

function AppTest(props) {
    return (
        <div>
          <MenuResponsive/>
        </div>
    );
}

export default AppTest;