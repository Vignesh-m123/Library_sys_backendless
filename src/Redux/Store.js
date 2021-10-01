import {createStore, compose, applyMiddleware} from 'redux';
//import SagaMiddleware from 'redux-saga';
import {Saga} from './Saga/Saga';
import createSagaMiddleware from 'redux-saga';
import Reducer from './Reducer/Reducer';
import "regenerator-runtime/runtime";


const SagaMiddleware = createSagaMiddleware();
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const Store = createStore(Reducer, applyMiddleware(SagaMiddleware),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)));
const Store = createStore(Reducer, compose(applyMiddleware(SagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
SagaMiddleware.run(Saga);
//const Action = type => Store.dispatch({type})

export default Store;
