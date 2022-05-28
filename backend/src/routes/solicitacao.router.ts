import { Router, Request, Response} from "express";
import ApiError from "../models/apiError";
import * as service from "../services/solicitacao.service"

const router = Router();

router.get(
  '/',
  async (req: Request, res: Response) => {
    return res.json(await service.getAll());
  }
)

router.get(
  '/:id',
  async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const response = await service.getById(id)
    if (response instanceof ApiError) {
      const { code, ...responseData } = response;
      return res.status(code).json(responseData);
    }
    return res.json(response);
  }
)

export default router;