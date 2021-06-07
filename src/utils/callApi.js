const {default: axios} = require('axios');

const callApi = (method, endpoint, data) => {
  return axios({
    method: method,
    url: endpoint,
    data: data,
  }).catch(err => console.log(err.message));
};

export default callApi;
