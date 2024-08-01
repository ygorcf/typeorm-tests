import { Reuniao } from './model/reuniao.model'
import { CriarReuniaoUseCase } from './use-case/criar-reuniao.use-case'
import { ListarReuniaoUseCase } from './use-case/listar-reuniao.use-case'

export class ReuniaoService {
  listarReunioes() {
    const useCase = new ListarReuniaoUseCase()
    return useCase.execute()
  }

  criarReuniao(reuniao: Reuniao) {
    const useCase = new CriarReuniaoUseCase()
    return useCase.execute(reuniao)
  }
}