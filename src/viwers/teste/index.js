import React, { useState } from 'react';
import './style.css';
import CardOpinar from '../../components/cardsOpinar';
import Carregando from '../../components/loading';

function Teste() {
  const [carregando, setCarregando] = useState(true);
  const [listaFeed, setListaFeed] = useState([]);

  const recuperarListagem = async () => {
    const url = 'http://localhost:3333/list-feed';
    const method = 'GET';

    const dadosRequisicao = new Request(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return fetch(dadosRequisicao).then(
      (response) => {
        response.json().then((result) => {
          if (response.status === 200) {
            setListaFeed(result);
            return setCarregando(false);
          }
          setCarregando(false);
          return setListaFeed([]);
        });
      },
    ).catch(() => {
      setCarregando(false);
      setListaFeed([]);
    });
  };

  React.useEffect(() => {
    recuperarListagem();
  }, []);

  return (
    <section className="opinar">
      {!carregando ? (
        <div className="content">
          <span className="titulo">
            Sistema de opiniões, qual a sua?
          </span>

          <div className="listagem">
            {
          listaFeed.map((opinar) => <CardOpinar prop={opinar} />)
        }
          </div>
        </div>
      ) : <Carregando />}
    </section>
  );
}
export default Teste;
