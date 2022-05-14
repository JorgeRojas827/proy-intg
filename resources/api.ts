import axios from 'axios';

axios.defaults.baseURL = "http://localhost:9000/api"

const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}

export {
  setAuthToken
}