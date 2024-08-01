import { Reuniao } from '../model/reuniao.model'
import { reunioes } from './listar-reuniao.use-case'

export class CriarReuniaoUseCase {
  execute(reuniao: Reuniao) {
    reunioes.push(reuniao)
    return reuniao
  }
}