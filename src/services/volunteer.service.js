import { setLoading } from "../store/action";
import constants from "../configs/constants";
import store from "../store/store";
const headers = {
  "Content-Type": "application/json",
  "api-key": constants.Headers.API_KEY,
  "api-version": constants.Headers.API_VERSION,
};

export function add(data) {
  store.dispatch(setLoading(true));
  return fetch(constants.add, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      store.dispatch(setLoading(false));
      return res;
    });
}

export function getList() {
  store.dispatch(setLoading(true));
  return fetch(constants.list, {
    headers,
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      store.dispatch(setLoading(false));
      return res;
    });
}

export function getStat() {
  store.dispatch(setLoading(true));
  return fetch(constants.stat, {
    headers,
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      store.dispatch(setLoading(false));
      return res;
    });
}

export function search(text) {
  store.dispatch(setLoading(true));
  return fetch(constants.search, {
    headers,
    method: "POSt",
    body: JSON.stringify({ key: text }),
  })
    .then((res) => res.json())
    .then((res) => {
      store.dispatch(setLoading(false));
      return res;
    });
}
