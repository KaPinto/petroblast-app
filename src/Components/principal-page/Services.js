import React, { Component } from 'react';
//La app se creará aquí

class Services extends Component {
	render() {
		return (
            <section className="section-services">
                  <div className="container">
                        <h1>Servicios</h1>
                        <div className="row flex " id="cards-services ">

                              <div className="card service-card m-3" >
                                    <div className="card-body">
                                          <h5 className="card-title">Card title</h5>
                                          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          <a href="#" className="card-link">Card link</a>
                                          <a href="#" className="card-link">Another link</a>
                                    </div>
                              </div>  
                              <div className="card service-card m-3" >
                                    <div className="card-body">
                                          <h5 className="card-title">Card title</h5>
                                          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          <a href="#" className="card-link">Card link</a>
                                          <a href="#" className="card-link">Another link</a>
                                    </div>
                              </div>                              
                              <div className="card service-card m-3" >
                                    <div className="card-body">
                                          <h5 className="card-title">Card title</h5>
                                          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          <a href="#" className="card-link">Card link</a>
                                          <a href="#" className="card-link">Another link</a>
                                    </div>
                              </div>  
                        </div>
                  </div>
                
            </section>
            );
	}
}
export default Services;