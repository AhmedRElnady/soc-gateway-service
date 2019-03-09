const axios = require('axios');

module.exports = (baseURL) => {
  return axios.create({

    baseURL: baseURL, 
    headers: {'Content-Type': 'application/json'}
  });

}