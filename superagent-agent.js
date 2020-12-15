const ProxyAgent = require('proxy-agent');

module.exports = (url) => (request) => {
  request.agent = new ProxyAgent(url);
  return request;
};
