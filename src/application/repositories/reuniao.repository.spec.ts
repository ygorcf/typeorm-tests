import Container from "typedi";
import { AppDataSource } from "../../infra/database/datasource";
import { Reuniao } from "../entity/reuniao.entity";
import { ReuniaoRepository } from "./reuniao.repository";

describe("ReuniaoRepository", () => {
  let repositorio: ReuniaoRepository;

  beforeEach(async () => {
    await AppDataSource.initialize();

    repositorio = Container.get(ReuniaoRepository);
  });

  afterEach(async () => {
    await AppDataSource.destroy();
  });

  describe("listarReuniao", () => {
    it("deveria retornar a lista de reunioes vazia", async () => {
      // action
      const resultado = await repositorio.listarReuniao();

      // assert
      expect(resultado).toEqual([]);
    });

    it("deveria retornar a lista de reunioes do banco", async () => {
      // arrange
      const listaReuniao = [
        {
          id: 1,
          nome: "3",
          data: new Date(2024, 7, 4),
        },
        {
          id: 2,
          nome: "5",
          data: new Date(2024, 7, 6),
        },
      ];
      const repositorioTypeORM = AppDataSource.getRepository(Reuniao);
      const reunioesEntidades = [
        repositorioTypeORM.create(listaReuniao[0]),
        repositorioTypeORM.create(listaReuniao[1]),
      ];
      await repositorioTypeORM.save(reunioesEntidades);

      // action
      const resultado = await repositorio.listarReuniao();

      // assert
      expect(resultado).toEqual([
        {
          id: 1,
          nome: "3",
          data: "2024-08-04",
        },
        {
          id: 2,
          nome: "5",
          data: "2024-08-06",
        },
      ]);
    });
  });

  describe("criarReuniao", () => {
    it("deveria criar a reuniao no banco", async () => {
      // arrange
      const reuniaoParams = {
        nome: "3",
        data: new Date(2024, 7, 4),
      };
      const reuniao = {
        id: 1,
        nome: "3",
        data: "2024-08-04",
      };
      const repositorioTypeORM = AppDataSource.getRepository(Reuniao);

      // action
      const resultado = await repositorio.criarReuniao(reuniaoParams);

      // assert
      expect(resultado).toEqual({
        id: 1,
        nome: "3",
        data: new Date(2024, 7, 4),
      });
      const reunioesBanco = await repositorioTypeORM.find();
      expect(reunioesBanco).toEqual([reuniao]);
    });
  });
});
