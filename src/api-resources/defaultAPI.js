import axios from 'axios';
import {apiBase} from 'config/global';

/**
 * Base POST
 * @param va1
 * @param var2
 * @returns {Q.Promise<unknown>}
 */
export const defaultPost = (va1, var2) =>
  axios.post(`${apiBase}/some-exstension`, {
    va1: va1,
    var2: var2
  }).then((res) => {
    return res;
  }).catch((error) => {
    return error.response;
  });

/**
 * Default GET
 * @param var1
 * @returns {Q.Promise<any> | Promise<void>}
 */
export const defaultGet = (var1) => {
  const endpoint = `${apiBase}/invoices/${var1}`;
  return axios.get(endpoint, {
    headers: {Authorization: 'someAuth'}
  }).then((res) => {
    return {
      results: res.data,
      status: res.status
    };
  }).catch((error) => {
    return error.response;
  });
};
