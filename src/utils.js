export const isJson = (str) => {
  try {
    let json  = JSON.parse(str);
    return (typeof json === 'object')
  } catch (e) {
    return false
  }
}
