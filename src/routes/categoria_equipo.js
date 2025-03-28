import { Router } from "express"; 
import { saveCategory, deleteCategory, getCategories, getCategoryCount, getCategory, updateCategory } from "../controlers/categoria_equipos";
const router = Router();
router.get("/categoria_equipos", getCategories);
router.get("/categoria_equipos/count", getCategoryCount);
router.get("/categoria_equipos/:id", getCategory);
router.post("/categoria_equipos", saveCategory);
router.delete("/categoria_equipos/:id", deleteCategory);
router.put("/categoria_equipos/:id", updateCategory);
export default router
