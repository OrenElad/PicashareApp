/**
 * Created by oren on 17/05/2017.
 */
"use strict";

import auth from './auth/auth.reducer';
import categories from './categories/categories.reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  categories,
});

export default rootReducer;