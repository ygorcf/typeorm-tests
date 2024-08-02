import { Inject, Service } from "typedi";
import { Reuniao } from "../model/reuniao.model";
import { ReuniaoRepository } from "../repositories/reuniao.repository";

@Service()
export class CriarReuniaoService {
  @Inject(() => ReuniaoRepository) private repository: ReuniaoRepository;

  async execute(reuniao: Reuniao) {
    const resultado = await this.repository.criarReuniao(reuniao);
    return resultado;
  }
}
