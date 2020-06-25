import React,{useState} from 'react';



function NavBarBulma(props) {

    const [isActive, setisActive] = React.useState(false);
    const [isActiveMenu,setIsActiveMenu]=React.useState(false);
    
    return (
        <div>
            <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                        onClick={()=>{
                            setIsActiveMenu(!isActiveMenu)
                        }}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={`navbar-menu ${isActiveMenu ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>
                        <div className={`navbar-item has-dropdown ${isActive ? "is-active" : ""}`} >
                            <a className="navbar-link"
                                onClick={()=>{
                                    setisActive(!isActive)
                                }}
                            >
                                Usuarios
                            </a>

                            <div className="navbar-dropdown ">
                                <a className="navbar-item">
                                    Ver Usuario
                                </a>
                                <a className="navbar-item">
                                    Crear Usuario
                                </a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBarBulma;