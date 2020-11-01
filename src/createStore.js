import {
    // 名前の重複を避けるために別名でimportする
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
  } from 'redux';
  import { routerReducer } from 'react-router-redux';
  
  import * as reducers from './reducers';
  
  // historyはsrc/index.jsから渡す
  export default function createStore(history) {
    return reduxCreateStore(
      combineReducers({
        ...reducers,
        // react-router-reduxのReducer
        router: routerReducer,
      })
    );
  }
