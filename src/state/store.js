import { applyMiddleware, compose, createStore } from 'redux'

import Reactotron from '../config/Reactotron'
import Thunk from 'redux-thunk'
import rootReducers from './reducers'

const Store = createStore(
  rootReducers,
  compose(
    applyMiddleware(Thunk),
    Reactotron.createEnhancer()
  )
)

export default Store
