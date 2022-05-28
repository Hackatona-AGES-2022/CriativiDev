import { Router, Request, Response} from "express";
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
    return res.json(await service.getById(id));
  }
)

export default router;