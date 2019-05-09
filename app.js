const argv = require('./config/yargs').argv;
const tarea = require('./config/por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tareaCreada = tarea.crear(argv.descripcion);
        console.log(tareaCreada);
        break;

    case 'listar':
        tarea.listar();
        break;

    case 'actualizar':
        if (tarea.actualizar(argv.descripcion, argv.completado)) {
            console.log(`Tarea "${argv.descripcion}" actualizada a ${argv.completado}`);
        } else {
            console.log(`Tarea ${argv.descripcion} no encontrada`);
        }
        break;

    case 'borrar':
        if (tarea.borrar(argv.descripcion)) {
            console.log(`Tarea "${argv.descripcion}" borrada correctamente`);
        } else {
            console.log(`Tarea ${argv.descripcion} no encontrada`);
        }
        break;

    default:
        console.log(`Comando ${comando} no válido.`);
}