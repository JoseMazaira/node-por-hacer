const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    default: true,
    alias: 'c',
    demand: false
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'lista las tareas')
    .help()
    .argv;

module.exports = {
    argv
}