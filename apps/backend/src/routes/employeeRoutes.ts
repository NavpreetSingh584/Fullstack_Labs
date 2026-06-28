import { Router } from "express";
import employeeController from "../controllers/employeeController";

const router = Router();

router.get("/", employeeController.getDepartments);
router.post("/", employeeController.createEmployee);

export default router;