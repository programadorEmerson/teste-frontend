/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import Gif from '../../images/loading.gif';
import './loading.css';

class Loading extends Component {
  render() {
    return (
      <section className="loadingPage">
        <img src={Gif} alt="Carregando" />
      </section>
    );
  }
}

export default Loading;
