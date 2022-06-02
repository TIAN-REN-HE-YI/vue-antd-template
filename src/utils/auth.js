import jsCookie from "js-cookie";

const Token = 'vue-antd-template';

export const setToken = (token) => jsCookie.set(Token, token);

export const getToken = () => jsCookie.get(Token);

export const removeToken = () => jsCookie.remove(Token);