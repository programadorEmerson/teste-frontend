/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import './feed.css';

const Feed = ({ postagem, listar }) => {
  const {
    content, like, love,
  } = postagem;
  // const { username } = retornoCliente.cliente;
  const reaction = (prop) => {
    const post = postagem;
    if (prop.target.id === 'love') {
      post.love = false;
    } else if (prop.target.id === 'noLove') {
      post.love = true;
    } else if (prop.target.id === 'like') {
      post.like = false;
    } else if (prop.target.id === 'noLike') {
      post.like = true;
    }

    // if (!username || !username.includes('@')) {
    //   return alert('Você não está logado');
    // }
    const url = 'http://localhost:3333/reaction';
    const method = 'POST';
    const dadosRequisicao = new Request(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    return fetch(dadosRequisicao).then(
      (response) => {
        response.json().then(() => {
          if (response.status === 200) {
            listar();
            return response;
          }
          return response;
        });
      },
    ).catch(() => console.log('falha'));
  };

  return (
    <section className="contentFeed">
      <span>{content}</span>
      <div className="emogi">
        { like
          ? <i id="like" onClick={(e) => reaction(e)} className="far like fa-thumbs-up" />
          : <i id="noLike" onClick={(e) => reaction(e)} className="fas noLike fa-thumbs-up" />}
        { love
          ? <i id="love" onClick={(e) => reaction(e)} className="fab love fa-gratipay" />
          : <i id="noLove" onClick={(e) => reaction(e)} className="fas noLove fa-heart" />}

      </div>
    </section>
  );
};

// Recebe o valor via props
const mapStateToProps = (state) => ({
  retornoCliente: state.clienteReducer,
});

// Faz a conexão Redux
export default connect(mapStateToProps, null)(Feed);
