import { Reuniao } from '../model/reuniao.model'

export const reunioes: Reuniao[] = []

export class ListarReuniaoUseCase {
  execute() {
    return [...reunioes]
  }
}