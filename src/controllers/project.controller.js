import projectService from "../services/project.service.js"


const getAllProject = async (req, res) => {
const result = await projectService.getAllProject();
console.log(result)
return res.json(result)
}
const getProjectsById = async (req, res) => {
    const { id } = req.params
    const result = await projectService.getProjectById(id)
    return res.json(result)
}
const createProjects = async (req,res) => {
    const data = req.body
    const result = await projectService.createProject(data)
    return res.json({message: `Création du projet effectué ! ID = ${result.insertId} ✅`})
}
    const updateProjects = async (req, res) =>{
        const { id } = req.params
        const data = req.body
        const result = await projectService.updateProject(id,data)
        console.log(result)
        return res.json({ message: "Mise à jour avec succès ! ✅"})
    }
    const deleteProjects = async (req, res) => {
        const { id } = req.params
        const result = await projectService.deleteProject(id)
        console.log(result)
        return res.status(201).json({message : "Projet supprimé avec succès ! ✅"})
    }
    export default {
    getAllProject,
    getProjectsById,
    createProjects,
    updateProjects,
    deleteProjects

}