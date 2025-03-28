import { Router } from "express"; 
import { saveMainten, deleteMainten, getMaintenaint, getMaintenCount, getMainten, updateMainten } from "../controlers/mantenimientos";
const router = Router();
router.get("/mantenimientos", getMaintenaint);
router.get("/mantenimientos/count", getMaintenCount);
router.get("/mantenimientos/:id", getMainten);
router.post("/mantenimientos", saveMainten);
router.delete("/mantenimientos/:id", deleteMainten);
router.put("/mantenimientos/:id", updateMainten);
export default router
