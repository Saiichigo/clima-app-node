const clima = require('./clima/clima');


const argv = require('yargs')
.options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const encodeUlr = encodeURI(argv.direccion);

clima.getClima(encodeUlr)
.then(data => console.log(`Temperatura de ${argv.direccion.toUpperCase()} es de:${data} grados`))
.catch(err => console.log(`No se encontro la ciudad: ${argv.direccion}`));


