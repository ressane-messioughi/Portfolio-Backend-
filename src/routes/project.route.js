import projectController from "../controllers/project.controller.js"
import express from "express"
import validate from "../middlewares/validate.js"
import { valideProject } from "../validators/project.validator.js"
import { authenticate } from "../middlewares/auth.middleware.js"
import authorize from "../middlewares/authorize.middleware.js"

const router = express.Router()

router.get("/" ,projectController.getAllProject)
router.get("/:id", projectController.getProjectsById)
router.post("/", valideProject, validate, authenticate, authorize('admin'), projectController.createProjects)
router.put("/:id", valideProject, validate, authenticate, authorize('admin'), projectController.updateProjects)
router.delete("/:id", authenticate, authorize('admin'), projectController.deleteProjects)
export default router