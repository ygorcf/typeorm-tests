import Container from "typedi";
import { ReuniaoRepository } from "../repositories/reuniao.repository";
import { ListarReuniaoService } from "./listar-reuniao.service";

describe("ListarReuniaoService", () => {
  describe("executar", () => {
    it("deveria retornar o valor do repositorio", async () => {
      // arrange
      const listaReunioes = [{ id: 1, nome: "2", data: new Date(2024, 7, 3) }];
      const repositorioMock = {
        listarReuniao: jest.fn(),
      };
      repositorioMock.listarReuniao.mockReturnValue(
        Promise.resolve(listaReunioes),
      );
      Container.set(ReuniaoRepository, repositorioMock);
      const service = Container.get(ListarReuniaoService);

      // action
      const resultado = await service.executar();

      // assert
      expect(resultado).toEqual(listaReunioes);
    });
  });
});
