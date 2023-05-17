const db = require("../db/dbConfig.js");

const getAllToDos = async () => {
    try {
        const allToDos = await db.any("SELECT * FROM toDos");
        return allToDos;
    } catch (error){
        return error;
    }
};

const deleteToDo = async (id) => {
    try {
        const deletedToDo = await db.one(
            "DELETE FROM toDos WHERE id = $1 RETURNING *",
            id
        );
        return deletedToDo; 
    } catch (error){
        return error;
    }
};

const updateToDo = async (id, toDo) => {
    try {
        const updatedToDo = await db.one(
            "UPDATE toDos SET task =$1, duration=$2, finished=$3 where id=$4 RETURNING *",
            [toDo.task, toDo.duration, toDo.finished, id]
        );
        return updatedToDo
    }catch (error){
        return error;
    }
};

const getToDo = async () => {
    try {
        const oneToDo = await db.one("SELECT * FROM toDos WHERE id=$1", id);
        return oneToDo;
      } catch (error) {
        return error;
      }
};

const createToDo = async (toDo) => {
    try {
        const newToDo = await db.one(
            "INSERT INTO toDos (task, duration, finished) VALUES($1, $2, $3) RETURNING *",
            [toDo.task, toDo.duration, toDo.finished]
          );
          return newToDo;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllToDos,
    getToDo,
    createToDo,
    deleteToDo,
    updateToDo,
};