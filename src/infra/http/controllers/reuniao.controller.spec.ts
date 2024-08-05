import Container from "typedi";
import { CriarReuniaoService } from "../../../application/services/criar-reuniao.service";
import { ListarReuniaoService } from "../../../application/services/listar-reuniao.service";
import { criarReuniao, listarReunioes } from "./reuniao.controller";

describe("reuniao.controller", () => {
  describe("listarReunioes", () => {
    it("deveria definir o status como 200 e enviar o retorno do service.executar como json", async () => {
      // arrange
      const listaReunioes = [{ id: 1, nome: "2", data: new Date(2024, 7, 3) }];
      const serviceMock = {
        executar: jest.fn(),
      };
      const responseMock = { status: jest.fn(), json: jest.fn(() => true) };
      serviceMock.executar.mockReturnValue(listaReunioes);
      responseMock.status.mockImplementation(() => responseMock);
      Container.set(ListarReuniaoService, serviceMock);

      // action
      const resultado = await listarReunioes({} as any, responseMock as any);

      // assert
      expect(resultado).toBeTruthy();
      expect(serviceMock.executar).toHaveBeenCalledTimes(1);
      expect(responseMock.status).toHaveBeenCalledTimes(1);
      expect(responseMock.status).toHaveBeenCalledWith(200);
      expect(responseMock.json).toHaveBeenCalledTimes(1);
      expect(responseMock.json).toHaveBeenCalledWith(listaReunioes);
    });
  });

  describe("criarReuniao", () => {
    it("deveria definir o status como 200 e enviar o retorno do service.executar como json", async () => {
      // arrange
      const reuniao = { id: 3, nome: "1", data: new Date(2024, 7, 2) };
      const serviceMock = {
        executar: jest.fn(),
      };
      const requestMock = {
        body: {
          nome: "1",
          data: "2024-08-02",
        },
      };
      const responseMock = { status: jest.fn(), json: jest.fn(() => true) };
      serviceMock.executar.mockReturnValue(reuniao);
      responseMock.status.mockImplementation(() => responseMock);
      Container.set(CriarReuniaoService, serviceMock);

      // action
      const resultado = await criarReuniao(
        requestMock as any,
        responseMock as any,
      );

      // assert
      expect(resultado).toBeTruthy();
      expect(serviceMock.executar).toHaveBeenCalledTimes(1);
      expect(responseMock.status).toHaveBeenCalledTimes(1);
      expect(responseMock.status).toHaveBeenCalledWith(200);
      expect(responseMock.json).toHaveBeenCalledTimes(1);
      expect(responseMock.json).toHaveBeenCalledWith(reuniao);
    });
  });
});
