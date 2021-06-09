import React from 'react';
import Imagem from '../../images/pessoaConfusa.jpg';
import './style.css';

function Home() {
  const titulo = 'Desenvolva uma aplicação onde textos possam ser postados de forma livre e, estes textos, possam ter “upvotes”.';
  const texto = 'A aplicação precisa permitir:';
  const requisitos = [
    {
      keyR: '01',
      textoR: 'Listar os postes atuais e seus “upvotes”;',
    },
    {
      keyR: '02',
      textoR: 'Adicionar um novo post;',
    },
    {
      keyR: '03',
      textoR: 'Adicionar um “upvote” a um post.',
    },
  ];
  const observacao = 'A API que será consumida por um aplicativo em React pode ser acessada através deste link: https://segware-book-api.segware.io/api/docs/#/. Sinta-se livre em mostrar seu estilo, práticas e organização. O principal objetivo deste desafio é validar seus conhecimentos e habilitadas nas linguagens, frameworks e qualidade do código.';
  const completar = 'Para completar seu teste, você deve:';
  const paraCompletar = [
    {
      keyC: '001',
      textoC: 'Incluir testes unitários e de integração',
    },
    {
      keyC: '002',
      textoC: 'Nenhuma configuração ou setup de ambiente deve ser requerida ou necessária para rodar os testes. Se o ambiente requerer uma configuração para rodar os testes ou aplicação, tudo deve ser feito em um único comando',
    },
  ];
  return (
    <section className="home">

      <aside className="sobre">

        <main>
          <span data-testid="titulo" className="titulo">{titulo}</span>
          <span data-testid="atencao" className="atencao">{texto}</span>
          <ul className="deveConter">
            {
            requisitos.map(({ keyR, textoR }) => <li key={keyR.toString()} className="itemDeveConter"><span>{textoR}</span></li>)
          }
          </ul>
          <span className="observacao">{observacao}</span>
          <span className="paraCompletar">{completar}</span>
          <ul className="completar">
            {
            paraCompletar.map(({ keyC, textoC }) => <li key={keyC.toString()} className="itemCompletar"><span>{textoC}</span></li>)
          }
          </ul>
        </main>

      </aside>

      <section className="ilustracao">
        <img src={Imagem} alt="Ilustração" />
      </section>

    </section>
  );
}
export default Home;
