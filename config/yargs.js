const argv = require('yargs')
    .command('create', 'Crea una nueva tarea', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('update', 'Actualiza el estado de una tarea', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completed: {
            default: true,
            alias: 'c',
            desc: 'Marca una tarea como realizada'
        }
    })
    .command('delete', 'Elimina una tarea', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por eliminar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}