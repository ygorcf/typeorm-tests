import { ExitStatus, Server } from "./server";

const server = new Server();

(async (): Promise<void> => {
  try {
    await server.start();
  } catch (error) {
    server._logger.error(`App exited with error.`, error);
    process.exit(ExitStatus.Failure);
  }
})();

["SIGTERM", "SIGINT"].forEach((event) => {
  process.on(event, async (signal) => {
    server._logger.warn(`${signal} Signal received!`);
    await server.close();
  });
});
