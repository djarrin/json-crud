export const SET_JSON_DATA = 'SET_JSON_DATA_MODEL';
export const EDIT_VALUE = 'EDIT_VALUE'

export function setJsonData({jsonData}) {
  return {
    type: SET_JSON_DATA,
    jsonData
  }
}

export function editValue({path, value}) {
  return {
    type: EDIT_VALUE,
    value,
    path
  }
}


