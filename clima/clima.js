

const axios = require('axios');


const getClima = async(ciudad) => { 


   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4e9e7c97197936e1706d071fa2229819&units=metric`)
   


    return resp.data.main.temp;

}

module.exports = {
    getClima
}