import { Router } from "express";
import organizationController from "../controllers/organizationController";

const router = Router();

router.get("/", organizationController.getMembers);
router.post("/", organizationController.createMember);

export default router;