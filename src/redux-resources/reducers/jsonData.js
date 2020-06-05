import {
  SET_JSON_DATA,
  EDIT_VALUE
} from 'redux-resources/actions/JsonDataActions';

export default function jsonData (state = initialState, action) {
  const {
    jsonData,
    value,
    path
  } = action;

  switch (action.type) {
    case SET_JSON_DATA:
      return {
        ...state,
        jsonData: jsonData
      };
    default:
      return state;
  }
}
const initialState = {
  defaultVal: ''
};
