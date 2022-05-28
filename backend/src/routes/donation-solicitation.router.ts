import { Router, Request, Response} from "express";
import * as donationSolicitacaoService from "../services/donation-solicitacao.service";
import ApiError from "../models/apiError";

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { solicitation_id, donation_id } = req.body;
  const response = await donationSolicitacaoService.create(donation_id, solicitation_id);
  if (response instanceof ApiError) {
      const { code, ...responseData } = response;
      return res.status(code).json(responseData);
  }
  return res.status(201).json(response);
});

router.get(
  '/donations/:id',
  async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const response = await donationSolicitacaoService.getByDonationId(id);
    if (response instanceof ApiError) {
      const { code, ...responseData } = response;
      return res.status(code).json(responseData);
    }
    return res.json(response);
  }
);

router.get(
  '/solicitations/:id',
  async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const response = await donationSolicitacaoService.getBySolicitationId(id);
    if (response instanceof ApiError) {
      const { code, ...responseData } = response;
      return res.status(code).json(responseData);
    }
    return res.json(response);
  }
);

export default router;