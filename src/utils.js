export const isJson = (str) => {
  try {
    let json  = JSON.parse(str);
    return (typeof json === 'object')
  } catch (e) {
    return false
  }
}

// https://stackoverflow.com/a/33312495/2769705
export const setValue = (obj, path, value) => {
  let i;
  for (i = 0; i < path.length - 1; i++) {
    obj = obj[path[i]];
  }
  obj[path[i]] = value;
}
