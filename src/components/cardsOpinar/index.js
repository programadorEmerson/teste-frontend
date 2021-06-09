/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './CardOpinar.css';

const CardOpinar = ({ prop }) => {
  const { titulo, imagem, _id } = prop;

  return (
    <Link className="cardOpinar" to={`/opinar/${_id}`}>
      <div className="sideUp">
        <img src={imagem} title={titulo} alt={titulo} />
      </div>
      <section className="sideDown">
        <span>{`${titulo.split(' ')[0]}`}</span>
      </section>
    </Link>
  );
};

export default CardOpinar;
