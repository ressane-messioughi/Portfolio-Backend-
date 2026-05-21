import projectModel from "../models/project.model.js";
import AppError from "../errors/AppError.js";

const getAllProject = async () => {
  const result = await projectModel.findAll();
  if (result.lenght === 0) {
    throw new AppError("Aucun projet disponible ❌", 401);
  }
  return result;
};
const getProjectById = async (id) => {
  const result = await projectModel.findById(id);
  if (!result || result.length === 0) {
    throw new AppError(`Pas de projet avec l'ID : ${id} ❌`, 404);
  }
  return result[0];
};
const createProject = async (data) => {
  const result = await projectModel.create(data);
  return result;
};
const updateProject = async (id, data) => {
  const [result] = await projectModel.update(id, data);
  console.log(result);
  if (result.affectedRows === 0) {
    throw new AppError("Projet introuvable ❌", 404);
  }
  return result;
};
const deleteProject = async (id) => {
  const result = await projectModel.remove(id);
  return result;
};
export default {
  getAllProject,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
