'use strict';
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API_ROOT = 'http://api.themoviedb.org/3/'
const API_KEY = 'f3d3acf7cb53fe379332fcc3db7cb7cb' //TODO move to .env

module.exports = function(path, params) {
  return new Promise(function(resolve, reject) {
    let request = `${API_ROOT}${path}?api_key=${API_KEY}`
    if (params) {
      for (var key in params) {
        debugger;
        request += `&${key}=${params[key]}`
      }
    }
    console.log(request)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', request);
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        debugger;
        console.log(this.status)
        console.log(this.responseText)
        resolve(JSON.parse(this.responseText))
      }
    };
    xhr.send();
  })
};
