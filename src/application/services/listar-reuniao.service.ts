import { Inject, Service } from "typedi";
import { ReuniaoRepository } from "../repositories/reuniao.repository";

@Service()
export class ListarReuniaoService {
  @Inject(() => ReuniaoRepository) private repository: ReuniaoRepository;

  async execute() {
    const reunioes = await this.repository.listarReuniao();

    return reunioes;
  }
}
