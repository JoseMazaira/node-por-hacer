const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const cargarDB = () => {

    try {
        listadoPorHacer = require('../../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, function(err) {

        if (err) throw new Error('No se pudo grabar: ', err)
    });
}


const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const listar = () => {

    cargarDB();
    console.log('====== INICIO ======='.green);
    listadoPorHacer.forEach(tarea => {
        console.log(tarea);
    });
    console.log('=======  FIN ======='.green);
};

const actualizar = (descripcion, estado) => {

    cargarDB();

    let tareaEncontrada = listadoPorHacer.find(function(tarea) {
        return tarea.descripcion === descripcion;
    });

    if (tareaEncontrada) {
        tareaEncontrada.completado = estado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(function(tarea) {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {

    crear,
    listar,
    actualizar,
    borrar
}