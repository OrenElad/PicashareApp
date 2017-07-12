// /**
//  * Created by oren on 17/05/2017.
//  */
// "use strict";

// // import auth from './auth/auth.reducer';
// // import categories from './categories/categories.reducer';
// import { combineReducers } from 'redux';
// import { NavigationActions } from 'react-navigation';
// import { AppNavigator } from '../navigators/AppNavigator';

// const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Categories');
// const initialNavState = AppNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

// function nav(state = initialNavState, action) {
//   let nextState;
//   switch (action.type) {
//     case 'Login':
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.back(),
//         state
//       );
//       break;
//     case 'Categories':
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.navigate({ routeName: 'Login' }),
//         state
//       );
//       break;
//     default:
//       nextState = AppNavigator.router.getStateForAction(action, state);
//       break;
//   }

//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// }

// const initialAuthState = { isLoggedIn: false };

// function auth(state = initialAuthState, action) {
//   switch (action.type) {
//     case 'Login':
//       return { ...state, isLoggedIn: true };
//     case 'Categories':
//       return { ...state, isLoggedIn: false };
//     default:
//       return state;
//   }
// }

// const AppReducer = combineReducers({
//   nav,
//   auth,
// });

// export default AppReducer;
