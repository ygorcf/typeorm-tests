import { RequestUtil } from "../util/request.util";

const PORT = process.env.TEST_PORT || 8080;
const HOST = process.env.TEST_HOST || "localhost";
const urlBase = `http://${HOST}:${PORT}/api`;
const recurso = "reuniao";

describe("/reuniao", () => {
  let requestUtil: RequestUtil;

  beforeEach(() => {
    requestUtil = new RequestUtil();
  });

  it("deveria retornar uma lista vazia na primera request", async () => {
    // arrange
    const url = `${urlBase}/${recurso}`;

    // action
    const response = await requestUtil.get(url);

    // assert
    expect(response.body).toHaveLength(0);
  });

  it("deveria retornar a reuniao adicionada na listagem", async () => {
    // arrange
    const url = `${urlBase}/${recurso}`;
    const reuniao = {
      nome: "Reuniao 1",
      data: "2024-08-02 10:19",
    };
    const listagemAntes = await requestUtil.get(url);

    // action
    const responseAdicionar = await requestUtil.post(url, reuniao);
    const listagemDepois = await requestUtil.get(url);

    // assert
    expect(listagemAntes.body).toHaveLength(0);
    expect(responseAdicionar.body).toEqual({
      nome: "Reuniao 1",
      data: "2024-08-02T10:19:00.000Z",
    });
    expect(listagemDepois.body).toHaveLength(1);
    expect(listagemDepois.body[0]).toEqual({
      nome: "Reuniao 1",
      data: "2024-08-02T10:19:00.000Z",
    });
  });
});
