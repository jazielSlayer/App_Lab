import { Router } from "express"; 
import { saveBooking, deleteBooking, getReservations, getBookingCount, getBooking, updateBooking } from "../controlers/Reservas_laboratorios";
const router = Router();
router.get("/reservas_laboratorios", getReservations);
router.get("/reservas_laboratorios/count", getBookingCount);
router.get("/reservas_laboratorios/:id", getBooking);
router.post("/reservas_laboratorios", saveBooking);
router.delete("/reservas_laboratorios/:id", deleteBooking);
router.put("/reservas_laboratorios/:id", updateBooking);
export default router
