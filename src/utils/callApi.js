const {default: axios} = require('axios');

const callApi = async (method, endpoint, data) => {
  try {
    return await axios({
      method: method,
      url: endpoint,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export default callApi;
