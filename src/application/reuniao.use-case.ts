import { Service } from "typedi";
import { Reuniao } from "./model/reuniao.model";
// import { CriarReuniaoUseCase } from "./services/criar-reuniao.service";
// import { ListarReuniaoUseCase } from "./services/listar-reuniao.service";

@Service()
export class ReuniaoService {
  listarReunioes() {
    // const useCase = new ListarReuniaoUseCase();
    // return useCase.execute();
  }

  criarReuniao(reuniao: Reuniao) {
    // const useCase = new CriarReuniaoUseCase();
    // return useCase.execute(reuniao);
  }
}
