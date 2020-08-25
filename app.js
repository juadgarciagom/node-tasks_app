const argv = require('./config/yargs').argv;
const { createTask, getTask, updateTask, deleteTask } = require('./logic/to-do');


let command = argv._[0];

// console.log(argv);

switch (command) {
    case 'create':
        let task = createTask(argv.d);
        console.log(`Se creó la siguiente tarea '${task}'`);
        break;

    case 'list':
        let list = getTask();
        console.log('Tenemos la siguiente lista de tareas');
        for (let task of list) {
            if (task.completed === "false") {
                console.log(`Tarea: ${task.description}`);
                console.log(`Estado: Por realizar`);
            } else {
                console.log(`Tarea: ${task.description}`);
                console.log(`Estado: Realizada`);
            }
        }
        break;

    case 'update':
        let update = updateTask(argv.description, argv.completed)
        if (update === true) {
            console.log(`La tarea ${argv.description} fue completada`);
        } else {
            console.log('Hubo problemas para actualizar la tarea o esta no se ha completado satisfactoriamente');
        }
        break;

    case 'delete':
        let deleted = deleteTask(argv.description)
        console.log(deleted);
        if (deleted === true) {
            console.log(`Se eliminó la siguiente tarea ${argv.description}`);
        } else {
            console.log('No se pudo eliminar la tarea');
        }

        break;


    default:
        console.log('Comando no valido!!');
        break;
}