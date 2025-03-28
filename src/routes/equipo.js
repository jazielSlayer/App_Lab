import { Router } from "express"; 
import { saveTeam, deleteTeam, getTeams, getTeamCount, getTeam, updateTeam } from "../controlers/equipos";
const router = Router();
router.get("/equipos", getTeams);
router.get("/equipos/count", getTeamCount);
router.get("/equipos/:id", getTeam);
router.post("/equipos", saveTeam);
router.delete("/equipos/:id", deleteTeam);
router.put("/equipos/:id", updateTeam);
export default router

