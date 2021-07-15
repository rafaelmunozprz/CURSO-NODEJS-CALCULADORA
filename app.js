const { crearArchivo } = require('./helpers/multiplicar')
const { argv } = require('./yargs/yargs')


console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.error(err))
