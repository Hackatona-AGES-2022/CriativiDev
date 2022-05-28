import { Router, Request, Response } from "express";
import ApiError from "../models/apiError";
import * as service from "../services/user.service";


const router = Router();

router.post(
  '/',
  async (req: Request, res: Response) => {
    const { email } = req.body;
    const response = await service.login(email);
    if (response instanceof ApiError) {
      const { code, ...responseData } = response;
      return res.status(code).json(responseData);
    }
    return res.json(response);
  }
)

export default router;