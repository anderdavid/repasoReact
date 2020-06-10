import React from 'react';


function NavBar(props) {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li>Repaso
                    <ul>
                        <li><a href="/repaso1">Repaso 1</a></li>
                        <li><a href="/repaso2">Repaso 2</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;