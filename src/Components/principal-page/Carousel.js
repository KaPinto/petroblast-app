import React, { Component } from 'react';
//La app se creará aquí

class Carousel extends Component {
	render() {
		return (
        <section id="carousel-section">
            <div id="carouselCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active align-content-center">
                        <img src="img/sliders/slider-1.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-flex text-left w-60 d-sm-block h-98 p-5">
                            <h5 class="title">Control de vibraciones por voladura de rocas</h5>
                            <p class="subtitle">
                                Nuestra empresa se encuentra enfocada al análisis, diseño y control sísmico
                                tanto de voladuras subterráneas como a cielo abierto.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/sliders/slider-2.JPG" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-flex text-left w-60 d-sm-block h-98 p-5">
                            <h5 class="title">Control de vibraciones por voladura de rocas</h5>
                            <p class="subtitle">
                                Nuestra empresa se encuentra enfocada al análisis, diseño y control sísmico
                                tanto de voladuras subterráneas como a cielo abierto.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/sliders/slider-3.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-flex text-left w-60 d-sm-block h-98 p-5">
                            <h5 class="title">Control de vibraciones por voladura de rocas</h5>
                            <p class="subtitle">
                                Nuestra empresa se encuentra enfocada al análisis, diseño y control sísmico
                                tanto de voladuras subterráneas como a cielo abierto.
                            </p>
                        </div>
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#carouselCaptions"
                    role="button"
                    data-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselCaptions"
                    role="button"
                    data-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
            );
	}
}
export default Carousel;