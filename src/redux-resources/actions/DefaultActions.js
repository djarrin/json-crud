export const SET_DEFAULT = 'SET_DEFAULT';

export function setDefault({defaultVar}) {
  return {
    type: SET_DEFAULT,
    defaultVar
  }
}
