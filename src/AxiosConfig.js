import axios from 'axios'

axios.defaults.baseURL = 'http://web01.lockorder.cc:8080';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';