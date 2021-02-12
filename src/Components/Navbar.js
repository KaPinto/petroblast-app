import React, { Component } from 'react';
//La app se creará aquí

class Navbar extends Component {
	render() {
		return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                    <div className="container-fluid">
                            <a className="navbar-brand col-sm-6 col-md-5 my-sm-0 flex-start" href="#">
                                <img
                                    className="img-fluid rounded float-left"
                                    src="Logo.png"
                                    alt="Petroblast S.A.S"
                                />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav me-auto mb-2 mt-sm-2 sm-auto mb-md-2 mb-lg-2">
                                    <li className="nav-item ">
                                    <a className="nav-link active" aria-current="page" href="#">¿Quiénes somos?
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Servicios</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Trabajos realizados</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </nav>
            </div>
            
		);
	}
}
export default Navbar;
