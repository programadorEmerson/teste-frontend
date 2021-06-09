import React, { useState, useEffect } from 'react';
import PageNotFound from '../../images/notFound.png';
import './style.css';

function NotFound() {
  const [loading, setLoading] = useState(true);

  const carregando = () => {
    setLoading(false);
  };

  useEffect(() => {
    carregando();
  }, []);

  return (
    <div className="notFound">
      { loading ? <h1> Carregando...</h1>
        : (
          <div>
            <img className="imagNotFound" src={PageNotFound} alt="" />
          </div>
        )}
    </div>
  );
}

export default NotFound;
