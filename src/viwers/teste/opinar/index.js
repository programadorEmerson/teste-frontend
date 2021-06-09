/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './opinar.css';
import { connect } from 'react-redux';
import Feed from '../../../components/feedMensagens';
import Carregando from '../../../components/loading';

function Opiniao({ retornoCliente }) {
  const { id } = useParams();
  const [carregando, setCarregando] = useState(true);
  const [listaFeed, setListaFeed] = useState([]);
  const [opiniao, setOpiniao] = useState();
  const [texto, setTexto] = useState();
  const { username } = retornoCliente.cliente;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setOpiniao((prevState) => ({
      ...prevState, [name]: value,
    }));
  };

  const recuperarListagem = async () => {
    const url = `http://localhost:3333/feeds/${id}`;
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
            const resultado = result;
            setListaFeed(resultado);
            setOpiniao({ content: '' });
            return setCarregando(false);
          }
          const resultado = result;
          setListaFeed(resultado);
          setOpiniao({ content: '' });
          setCarregando(false);
          return setListaFeed([]);
        });
      },
    ).catch(() => {
      setCarregando(false);
      setOpiniao({ content: '' });
      setListaFeed([]);
    });
  };

  const recuperarTexto = async () => {
    const url = 'http://localhost:3333/feed/texto';
    const method = 'GET';

    const dadosRequisicao = new Request(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        _id: id,
      },
    });

    return fetch(dadosRequisicao).then(
      (response) => {
        response.json().then((result) => {
          if (response.status === 200) {
            return setTexto(result);
          }
          return setTexto('Erro ao carregar o texto');
        });
      },
    ).catch(() => {
      setTexto('Erro ao carregar o texto');
    });
  };

  const postarOpiniao = async (prop) => {
    if (!username || !username.includes('@')) {
      return alert('Você não está logado');
    }
    const url = 'http://localhost:3333/feed';
    const method = 'POST';
    const dadosRequisicao = new Request(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        username,
      },
      body: JSON.stringify({
        authorId: '',
        feedId: prop,
        content: opiniao.content,
      }),
    });

    return fetch(dadosRequisicao).then(
      (response) => {
        response.json().then(() => {
          if (response.status === 200) {
            return recuperarListagem();
          }
          setCarregando(false);
          recuperarListagem();
          return setListaFeed([]);
        });
      },
    ).catch(() => {
      setCarregando(false);
      setListaFeed([]);
    });
  };

  React.useEffect(() => {
    recuperarTexto();
    recuperarListagem();
  }, []);

  return (
    <section className="conteudoTeste">
      {!carregando ? (
        <div className="descricao">
          <span>
            {texto}
          </span>
          <div className="suaOpiniao">
            <aside className="sideA">
              <span data-testid="opiniao">
                Qual sua opinião ?
              </span>
              <span>
                <textarea
                  id="content"
                  name="content"
                  data-testid="textarea"
                  value={opiniao.content}
                  rows="7"
                  cols="100"
                  onChange={(e) => handleChange(e)}
                />
              </span>
              <div>
                <button onClick={() => postarOpiniao(id)} className="buttonPostar" type="button">Postar Opinião</button>
              </div>
            </aside>
          </div>
          <div className="styleComentarios">
            <span>Cometários:</span>
          </div>

          <div className="styleComentarios">
            <ul>
              <div className="listaFeed">
                {listaFeed.map((post) => (
                  <li className="comment">
                    {' '}
                    <Feed postagem={post} listar={recuperarListagem} />
                    {' '}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      ) : <Carregando />}
    </section>
  );
}

// Recebe o valor via props
const mapStateToProps = (state) => ({
  retornoCliente: state.clienteReducer,
});

// Faz a conexão Redux
export default connect(mapStateToProps, null)(Opiniao);
