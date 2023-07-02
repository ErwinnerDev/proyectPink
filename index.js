require('dotenv').config();
const server = require('./src/config/app');
const {PORT} = process.env;
  
const port = PORT;

server.listen(port, () => {
   console.log(`Started at ${port}`);
});