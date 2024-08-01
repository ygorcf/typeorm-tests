import { Router } from "express";
import * as ReuniaoController from "../../controllers/reuniao.controller";

class ReuniaoRouter {
  private router = Router();

  constructor() {
    this.initRoutes();
  }

  getRouter() {
    return this.router;
  }

  private initRoutes() {
    this.router.get("/", ReuniaoController.listarReunioes);
    this.router.post("/", ReuniaoController.criarReuniao);
  }
}

export default new ReuniaoRouter().getRouter();
