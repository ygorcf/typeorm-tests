import { Request, Response } from "express";
import { Container } from "typedi";
import { CriarReuniaoService } from "../../../application/services/criar-reuniao.service";
import { ListarReuniaoService } from "../../../application/services/listar-reuniao.service";

export async function listarReunioes(req: Request, res: Response) {
  const useCase = Container.get(ListarReuniaoService);

  const response = await useCase.execute();

  return res.status(200).json(response);
}

export async function criarReuniao(req: Request, res: Response) {
  const reuniao = {
    nome: req.body.nome,
    data: new Date(req.body.data),
  };

  const useCase = Container.get(CriarReuniaoService);
  const reuniaoResposta = await useCase.execute(reuniao);

  return res.status(200).json(reuniaoResposta);
}
