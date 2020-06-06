import {
  SET_JSON_DATA,
  EDIT_VALUE
} from 'redux-resources/actions/JsonDataActions';
import {setValue} from 'utils';

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
    case EDIT_VALUE:
      let newJsonData = JSON.parse(state.jsonData)
      let newPath = path.slice(1)
      setValue(newJsonData, newPath, value)
      return Object.assign({}, state ,  {jsonData: JSON.stringify(newJsonData)})
    default:
      return state;
  }
}
const initialState = {
  jsonData: '{}'
};
