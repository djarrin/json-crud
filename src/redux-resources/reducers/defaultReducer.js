import {
  SET_DEFAULT
} from 'redux-resources/actions/DefaultActions';
import {storeDefaultVal} from 'storage/defaultStorage';

export default function defaultReducer (state = initialState, action) {
  const {
    defaultVal
  } = action;

  switch (action.type) {
    case SET_DEFAULT:
      storeDefaultVal(defaultVal);
      return {
        ...state,
        defaultVal: defaultVal
      };
    default:
      return state;
  }
}
const initialState = {
  defaultVal: ''
};
