import { Request, Response } from "express";

export interface Reuniao {
  nome: string,
  data: Date
}

const reunioes: Reuniao[] = []

export function listarReunioes(req: Request, res: Response) {
  const response = [...reunioes]

  return res.status(200).json(response)
}

export function criarReuniao(req: Request, res: Response) {
  const reuniao = {
    nome: req.body.nome,
    data: new Date(req.body.data)
  }
  reunioes.push(reuniao)
  return res.status(200).json(reuniao)
}