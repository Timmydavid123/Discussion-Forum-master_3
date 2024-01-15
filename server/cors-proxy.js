// cors-proxy.js
const cors_anywhere = require('cors-anywhere');

const host = '0.0.0.0';
const port = 8080;

cors_anywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: [], // No headers are required to be present
  removeHeaders: [] // Remove no headers
}).listen(port, host, () => {
  console.log(`CORS Anywhere server is running on ${host}:${port}`);
});