/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import clienteReducer from '../reducers/cliente.reducer';

// Se tiver mais reducers insere abaixo
const rootReducer = combineReducers({ clienteReducer });

export default rootReducer;
