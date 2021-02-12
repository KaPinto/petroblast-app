import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import Carousel from './Components/principal-page/Carousel';
import About from './Components/principal-page/About';
import Services from './Components/principal-page/Services'
import Contact from './Components/principal-page/Contact';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Carousel/>
    <About/>
    <Services/>
    <Contact/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
