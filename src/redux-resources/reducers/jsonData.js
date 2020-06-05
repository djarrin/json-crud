import {
  SET_JSON_DATA,
  EDIT_VALUE
} from 'redux-resources/actions/JsonDataActions';
import jp from 'jsonpath';

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
      console.log('path',path);
      let newPath = path.slice(1)
      console.log('newPath',newPath);
      newJsonData[newPath] = value
      const newState = Object.assign({}, state ,  {jsonData: JSON.stringify(newJsonData)})
      return newState
    default:
      return state;
  }
}
const initialState = {
  jsonData: '{ "checked": false, "dimensions": { "width": {"min": 5, "max": 10}, "height": 10 }, "id": 1, "name": "A green door", "price": 12.5, "tags": [ "home", "green" ] }'
};
