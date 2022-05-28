import { Router, Request, Response} from "express";
import * as service from "../services/user.service"

const router = Router();

router.post(
  '/',
  async (req: Request, res: Response) => {
    const userPayload = req.body;
    return res.json(await service.create(userPayload));
  }
)

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