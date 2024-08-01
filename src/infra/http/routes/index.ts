import { Router } from "express";
import { router as apiRoutes } from "./api";

const router = Router();

router.use("/api", apiRoutes);

export default router;
