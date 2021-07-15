const fs = require('fs');
const colors = require('colors')
const crearArchivo = (base = 1, listar = false, hasta) => {
    return new Promise((resolve, reject) => {        
        let salida = ''
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        if(listar){
            console.log(colors.rainbow('======================='))
            console.log(`     Tabla del ${colors.red(base)}`)
            console.log(colors.rainbow('======================='))
            console.log(colors.rainbow(salida))
        }
        fs.writeFile(`./tablas/Tabla del ${base}.txt`, salida, (err) => {
            if (err) reject(err)
            resolve(`Tabla del ${base}.txt creado`)
        })
    })
}

module.exports = {
    crearArchivo
}