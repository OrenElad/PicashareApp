/**
 * Created by oren on 17/05/2017.
 */
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import devToolsEnhancer from 'remote-redux-devtools';

// import rootReducer from './root.reducer';
// import AuthInitialState from './auth/authInitialState';
// import CategoriesInitialState from './categories/categoriesInitialState';
// import AppReducer from './navigation/navigation.reducer.js';


// const createStoreWithMiddleware = applyMiddleware(
//   thunk
// )(createStore);

// function configureStore(initialState) {
//   return createStoreWithMiddleware(rootReducer, initialState);
// };

// function getInitialState() {
//   return {
//     appReducer: new AppReducer(),
//     auth: new AuthInitialState(),
//     categories: new CategoriesInitialState()
//   };
// }

// const store = configureStore(getInitialState());

// export default store;