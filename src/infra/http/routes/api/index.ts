import { Router } from "express";
import reuniaoRouter from "./reuniao";

export const router = Router();

router.use("/reuniao", reuniaoRouter);
