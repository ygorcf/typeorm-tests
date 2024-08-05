import { Inject, Service } from "typedi";
import { ReuniaoRepository } from "../repositories/reuniao.repository";

@Service()
export class ListarReuniaoService {
  @Inject(() => ReuniaoRepository) private repositorio: ReuniaoRepository;

  executar() {
    return this.repositorio.listarReuniao();
  }
}
