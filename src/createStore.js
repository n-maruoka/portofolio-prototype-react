import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import * as reducers from './reducers';

// historyはsrc/index.jsから渡すようにする
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history),  // connected-react-router をimportして (history)を入れる
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history)
    )
  );
}
