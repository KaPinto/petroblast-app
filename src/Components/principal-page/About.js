import React, { Component } from 'react';
//La app se creará aquí

class About extends Component {
	render() {
		return (
            <section id="section-about">
                <div className="container">
                    <div class="section-info col-md-12" alt="Quiénes_somos" id="services">
                        <div class="d-md-inline-flex m-md-5">
                            <div class="col-md-6 p-3">
                                <h5 class="title">¿Quiénes somos?</h5>

                                <p class="p-4">
                                    Somos una compañía con un enfoque real al cliente dedicada a proporcionar
                                    información cualitativa y cuantitativa de la más alta calidad e integridad
                                    sobre los procesos mineros y el uso de explosivos para la fragmentación de
                                    rocas, permitiéndole a su vez una mejor administración y control de estos
                                    procesos. Contamos con una experiencia de 20 años en ingeniería Minera,
                                    Geológica y Geofísica, haciendo uso de un sistema Industrial de monitoreo
                                    puntual ó continuo, empleando tecnología de punta en procesamientos de datos
                                    sísmicos, de forma automática.
                                </p>
                                <button class="col-md-3">Ver más</button>
                            </div>
                            <div class="col-md-6 m-md-2 mt-md-5">
                                <img src="img/about_.jpg" alt="igeosoftmine" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default About;