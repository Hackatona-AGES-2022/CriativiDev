import { Router, Request, Response} from "express";
import * as solicitacaoService from "../services/solicitacao.service";
import { CreateSolicitacaoPayload } from "../models/solicitacao";
import ApiError from "../models/apiError";

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const solicitacaoPayload = req.body as CreateSolicitacaoPayload;
  const response = await solicitacaoService.create(solicitacaoPayload);
  if (response instanceof ApiError) {
      const { code, ...responseData } = response;
      return res.status(code).json(responseData);
  }
  return res.status(201).json(response);
});

router.get(
  '/',
  async (req: Request, res: Response) => {
    return res.json(await solicitacaoService.getAll());
  }
)

router.get(
  '/:id',
  async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const response = await solicitacaoService.getById(id)
    if (response instanceof ApiError) {
      const { code, ...responseData } = response;
      return res.status(code).json(responseData);
    }
    return res.json(response);
  }
)

export default router;