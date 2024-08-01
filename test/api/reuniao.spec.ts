const request = require("request");
const PORT = process.env.TEST_PORT || 8080;
const HOST = process.env.TEST_HOST || "localhost";
const urlBase = `http://${HOST}:${PORT}/api`;
const recurso = "reuniao";

describe("/reuniao", () => {
  it("deveria retornar uma lista vazia na primera request", (done) => {
    request.get(
      {
        url: `${urlBase}/${recurso}`,
        json: true,
      },
      (err, response) => {
        if (err) {
          done(err);
          return;
        }

        try {
          expect(response.body).toHaveLength(0);

          done();
        } catch (e) {
          done(e);
        }
      },
    );
  });
});
