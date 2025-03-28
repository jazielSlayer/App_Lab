import { Router } from "express"; 
import { saveLoan, deleteLoan, getLoans, getLoanCount, getLoan, updateLoan } from "../controlers/prestamos";
const router = Router();
router.get("/prestamos", getLoans);
router.get("/prestamos/count", getLoanCount);
router.get("/prestamos/:id", getLoan);
router.post("/prestamos", saveLoan);
router.delete("/prestamos/:id", deleteLoan);
router.put("/prestamos/:id", updateLoan);
export default router
