
const { default: axios } = require("axios");// para llamar a api externa

const getWelcome = (req, res) => {
    res.send('Hello World!')
  }

module.exports={
    getWelcome
}