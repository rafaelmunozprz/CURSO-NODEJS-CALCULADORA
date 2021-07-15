const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the base for multiply table'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Show the table in the console'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Set the tables´s limit'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'The base require a number'
        } else if (isNaN(argv.h)) {
            throw 'The h require a number'
        }
        else return true
    })
    .argv

module.exports = {
    argv
}