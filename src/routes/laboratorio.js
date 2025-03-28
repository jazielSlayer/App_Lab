import { Router } from "express"; 
import { saveLaboratory, deleteLaboratory, getLaboratories, getLaboratoryCount, getLaboratory, updateLaboratory } from "../controlers/laboratorios";
const router = Router();
router.get("/laboratorios", getLaboratories);
router.get("/laboratorios/count", getLaboratoryCount);
router.get("/laboratorios/:id", getLaboratory);
router.post("/laboratorios", saveLaboratory);
router.delete("/laboratorios/:id", deleteLaboratory);
router.put("/laboratorios/:id", updateLaboratory);
export default router