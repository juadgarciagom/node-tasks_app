const fs = require('fs');

let tasks = [];

const saveDB = () => {
    let data = JSON.stringify(tasks);

    fs.writeFile('db/directory.json', data, (err) => {
        if (err) throw new Error('Error ', err);

    })

};

const loadDB = () => {
    try {
        tasks = require('../db/directory.json');
    } catch (error) {
        tasks = [];
    }
};

const createTask = (description) => {
    loadDB();
    let task = {
        description,
        completed: false
    };

    tasks.push(task);
    // console.log(tasks);
    saveDB();
    return task.description;
};

const getTask = () => {
    loadDB();
    return tasks

};

const updateTask = (description, status) => {
    loadDB();



    let index = tasks.findIndex(task => task.description === description);


    if (index >= 0) {
        tasks[index].completed = status

        saveDB();
        return true;
    } else {
        return false;
    }

};

const deleteTask = (description) => {
    loadDB();

    let newTasks = tasks.filter(task => {
        return task.description !== description
    });
    console.log(tasks);
    console.log(newTasks);

    if (newTasks.length === tasks.length) {
        return false
    } else {
        tasks = newTasks;
        saveDB();
        return true;
    }


};

module.exports = {
    createTask,
    getTask,
    updateTask,
    deleteTask
};