import { createStore, applyMiddleware, compose } from 'redux'
import penderMiddleware from 'redux-pender'
import modules from './modules'

const configure = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const composeEnhancer = devTools || compose
  const middlewares = [penderMiddleware()]
  const store = createStore(modules, composeEnhancer(applyMiddleware(...middlewares)))
  return store
}

export default configure