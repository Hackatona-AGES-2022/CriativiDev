import { Router, Request, Response } from 'express';
import { CreateDonationPayload } from 'models/donation';
import ApiError from '../models/apiError';
import * as donationService from '../services/donation.service';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const donationPayload = req.body as CreateDonationPayload;
    const response = await donationService.create(donationPayload);
    if (response instanceof ApiError) {
        const { code, ...responseData } = response;
        return res.status(code).json(responseData);
    }
    return res.status(201).json(response);
});

router.get('/:id', async (req: Request, res: Response) => {
    const donationId = Number(req.params.id);
    const response = await donationService.getById(donationId);
    if (response instanceof ApiError) {
        const { code, ...responseData } = response;
        return res.status(code).json(responseData);
    }
    return res.json(response);
});

router.get('/', async (req: Request, res: Response) => {
    const categoryParam = req.query.categoryName;
    let response;
    if (categoryParam) {
      response = await donationService.searchByCategory(categoryParam as string);
    } else {
        response = await donationService.getAll()
    }
    return res.json(response);
});


export default router;
