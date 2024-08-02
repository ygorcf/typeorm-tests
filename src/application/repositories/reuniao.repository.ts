import { Service } from "typedi";
import { AppDataSource } from "../../infra/database/datasource";
import { Reuniao } from "../entity/reuniao.entity";
import { Reuniao as ReuniaoModel } from "../model/reuniao.model";

@Service()
export class ReuniaoRepository {
  listarReuniao() {
    const repository = AppDataSource.getRepository(Reuniao);
    return repository.find();
  }

  async criarReuniao(reuniao: ReuniaoModel) {
    const repository = AppDataSource.getRepository(Reuniao);
    const reuniaoEntity = repository.create(reuniao);
    const resultado = await repository.save(reuniaoEntity);
    return resultado;
  }
}
