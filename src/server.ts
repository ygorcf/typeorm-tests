import express from "express";
import * as http from "http";
import router from "./infra/http/routes";

export enum ExitStatus {
  // eslint-disable-next-line no-unused-vars
  Failure = 1,
  // eslint-disable-next-line no-unused-vars
  Sucess = 0,
}

export class Server {
  _logger = console;
  _app: express.Express;
  _server: http.Server;

  constructor() {
    this._app = express();
    // this.configureSwagger();
    this.configureMiddleware();
    // this.configureCors();
    // this.configureLogger();
    this.configureHTTP();
    // this.configureError();
    // this.configureUploadStorage();
    this._app.set("port", process.env.PORT || 8080);
  }

  async start() {
    try {
      this._server = this._app.listen(this._app.get("port"), () => {
        this._logger.info(
          "🚀 Server is running on port " + this._app.get("port"),
        );
      });
    } catch (e) {
      this._logger.error("Falhou ao iniciar o app", e);
      process.exit(ExitStatus.Failure);
    }
  }

  async close() {
    try {
      this._closeServer();
      this._logger.info("Fechou o app com sucesso");
      process.exit(ExitStatus.Sucess);
    } catch (e) {
      this._logger.error("Falhou ao fechar o app", e);
      process.exit(ExitStatus.Failure);
    }
  }

  private async _closeServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._server) {
        this._server.close((err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  }

  private configureHTTP() {
    this._app.use("", router);
  }

  private configureMiddleware() {
    this._app.use(express.json({ limit: "200mb" }));
  }
}
