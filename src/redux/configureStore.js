/**
 * Created by oren on 17/05/2017.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';
import AuthInitialState from './auth/authInitialState';
import CategoriesInitialState from './categories/categoriesInitialState';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
};

function getInitialState() {
  return {
    auth: new AuthInitialState(),
   // categories: new CategoriesInitialState(),
  };
}

const store = configureStore(getInitialState());

export default store;