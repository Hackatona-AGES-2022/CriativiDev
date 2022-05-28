import { Router, Request, Response } from "express";
import * as service from "../services/user.service";


const router = Router();

router.post(
  '/',
  async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
      res.status(200).json(await service.login(email));
    } catch(err) {
      throw err;
    }
  }
)