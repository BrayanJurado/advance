const pool = require('../db');

//Crear proyectos
const createProject = async (req, res) => {
    try {
        const project = req.body;

        const result = await pool.query(
            "INSERT INTO project (project_id, description, creation_date, culmination_date) VALUES ($1, $2, $3, $5) RETURNING *",
        [
            project.project_id,
            project.description,
            project.creation_date,
            project.culmination_date
        ]
        );

        if (result.rowCount === 0){
            return res.json({ message: "Proyecto no insertados" });
        }

        res.status(201).json(result.rows[0]);
    } catch (error) {
      console.log(error);
    }
};

//Listar proyectos
const getAllProjects = async (req, res) => {
    try {
        const allProjects = await pool.query(
            "SELECT * FROM project"
        );

        if (allProjects.rowCount === 0){
            return res.json({ message: "Proyectos no encontrados" });
        }

        res.send(result.rows);
    } catch (error) {
      console.log(error.message);
    }
};

//Obtener un proyecto de la lista de proyectos
const getProject = async (req, res) => {
    try {
        const pid = req.params.pid;

        const result = await pool.query(
            "SELECT * FROM project WHERE pid = $1", [pid]
        );

        if (result.rowCount === 0){
            return res.json({ message: "Proyecto no encontrado" });
        }

        res.send(result.rows[0]);
    } catch (error) {
      console.log(error.message);
    }
};

// Actualizar un proyecto 
const updateProject = async (req, res) => {
    try {
        const project = req.bod;

        const result = await pool.query(
            "UPDATE project SET description = $1, culmination_date = $2 RETURNING *",
        [
            project.description,
            project.culmination_date
        ]
        );

        if (result.rowCount === 0){
            return res.json({ message: "Proyecto no actualizado" });
        }

        res.status(201).json(result.rows[0]);
    } catch (error) {
      console.log(error);
    }
};

//Eliminar un proyecto de la lista de proyectos
const deleteProject = async (req, res) => {
    try {
        const pid = req.params.pid;

        const result = await pool.query(
            "DELETE FROM project WHERE pid = $1", [pid]
        );

        if (result.rowCount === 0){
            return res.json({ message: "Proyecto no eliminado" });
        }

        res.status(204).send();
    } catch (error) {
      console.log(error);
    }
};

module.exports = {
    createProject,
    getAllProjects,
    getProject,
    deleteProject
};