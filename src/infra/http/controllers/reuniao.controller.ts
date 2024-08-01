import { Request, Response } from "express";
import { ReuniaoService } from "../../../application/reuniao.use-case";

const service = new ReuniaoService()

export function listarReunioes(req: Request, res: Response) {
  const response = service.listarReunioes()

  return res.status(200).json(response)
}

export function criarReuniao(req: Request, res: Response) {
  const reuniao = {
    nome: req.body.nome,
    data: new Date(req.body.data)
  }

  const reuniaoResposta = service.criarReuniao(reuniao)

  return res.status(200).json(reuniaoResposta)
}