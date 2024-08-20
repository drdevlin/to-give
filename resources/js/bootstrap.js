import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

document.body.style = 'background-color: rgb(2 6 23); overflow: hidden;';
