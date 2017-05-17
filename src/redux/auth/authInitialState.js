/**
 * Created by oren on 17/05/2017.
 */
"use strict";
import {Record, Map} from 'immutable';

const InitialState = Record({
  authProvider: null,
  authChecked: false,
  authData: null
});

export default InitialState;