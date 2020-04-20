import constants from "../configs/constants";
const headers = {
  "Content-Type": "application/json",
  "api-key": constants.Headers.API_KEY,
  "api-version": constants.Headers.API_VERSION,
};

export function add(data) {
  return fetch(constants.add, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function getList() {
  return fetch(constants.list, {
    headers,
    method: "GET",
  }).then((res) => res.json());
}

export function getStat() {
  return fetch(constants.stat, {
    headers,
    method: "GET",
  }).then((res) => res.json());
}

export function search(text) {
  return fetch(constants.search, {
    headers,
    method: "POSt",
    body: JSON.stringify({ key: text }),
  }).then((res) => res.json());
}
