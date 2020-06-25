import React from 'react';
import './NavBar.css'


function NavBar(props) {
    return (
       <nav>
           <ul>
              <li><a href="#" className="item-menu">Repaso</a>
                <ul>
                    <li><a href="/repaso1" className="item-submenu">Repaso 1</a></li>
                    <li><a href="/repaso2" className="item-submenu">Repaso 2</a></li>
                </ul>
              </li>
              <li><a href="#" className="item-menu">Conectividad</a>
                <ul>
                    <li><a href="/testGet" className="item-submenu">testGet</a></li>
                    <li><a href="/testPost" className="item-submenu">TestPost</a></li>
                </ul>
              </li>
              <li><a href="#" className="item-menu">TestRedux</a>
                <ul>
                    <li><a href="/testRedux" className="item-submenu">TestRedux</a></li>
                    <li><a href="/userContainer" className="item-submenu">UserRedux</a></li>
                </ul>
              </li>
           </ul>
       </nav>
    );
}

export default NavBar;