import Container from "typedi";
import { ReuniaoRepository } from "../repositories/reuniao.repository";
import { CriarReuniaoService } from "./criar-reuniao.service";

describe("CriarReuniaoService", () => {
  describe("executar", () => {
    it("deveria retornar o valor do repositorio", async () => {
      // arrange
      const reuniao = { id: 1, nome: "2", data: new Date(2024, 7, 3) };
      const reuniaoParams = { nome: "2", data: new Date(2024, 7, 3) };
      const repositorioMock = {
        criarReuniao: jest.fn(),
      };
      repositorioMock.criarReuniao.mockReturnValue(Promise.resolve(reuniao));
      Container.set(ReuniaoRepository, repositorioMock);
      const service = Container.get(CriarReuniaoService);

      // action
      const resultado = await service.executar(reuniaoParams);

      // assert
      expect(resultado).toEqual(reuniao);
      expect(repositorioMock.criarReuniao).toHaveBeenCalledTimes(1);
      expect(repositorioMock.criarReuniao).toHaveBeenCalledWith(reuniaoParams);
    });
  });
});
