import { Router } from "express"; 
import { saveUser, deleteUser, getUsers, getUserCount, getUser, updateUser } from "../controlers/users";
const router = Router();
router.get("/users", getUsers);
router.get("/users/count", getUserCount);
router.get("/users/:id", getUser);
router.post("/users", saveUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
export default router