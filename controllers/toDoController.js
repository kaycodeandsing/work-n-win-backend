const express = require("express");
const toDos = express.Router();
const { checkBoolean, checkName } = require("../validations/checkToDos.js");
const {
    getAllToDos,
    getToDo,
    createToDo,
    deleteToDo,
    updateToDo,
 } = require("../queries/toDos");

toDos.get ("/", async (request, response) => {
    const allToDos = await getAllToDos();
    if (allToDos[0]){
        response.status(200).json(allToDos);
    } else {
        response.status(500).json({error: "server error"});
    }
});

toDos.get ("/:id", async (req, res) => {
    const { id } = req.params;
    const toDo = await getToDo(id);
    if (toDo){
        res.json(toDo);
    } else {
        res.status(404).json({ error: "not found"});
    }
});

toDos.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedToDo = await deleteToDo(id);
    if (deletedToDo){
        res.status(200).json(deletedToDo);
    } else {
        res.status(404).json("ToDo not found");
    }
});

toDos.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedToDo = await updateToDo(id, req.body);
    res.status(200).json(updatedToDo);
});

toDos.post("/",checkBoolean,checkName, async (req,res) => {
    try {
        const toDo = await createToDo(req.body);
        res.json(toDo);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});




module.exports = toDos;