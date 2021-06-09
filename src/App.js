import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './viwers/home';
import Navbar from './components/navbar';
import Login from './viwers/login';
import Gerenciar from './viwers/gerenciar';
import Teste from './viwers/teste';
import Opinar from './viwers/teste/opinar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/gerenciar" component={Gerenciar} />
        <Route exact path="/opinar" component={Teste} />
        <Route exact path="/opinar/:id" component={Opinar} />
      </Switch>
    </>
  );
}
export default App;
