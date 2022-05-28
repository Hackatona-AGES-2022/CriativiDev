import { Router, Request, Response } from 'express';
import ApiError from '../models/apiError';
import * as categoryService from '../services/category.service';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    const categoryId = Number(req.params.id);
    const response = await categoryService.getById(categoryId);
    if (response instanceof ApiError) {
        const { code, ...responseData } = response;
        return res.status(code).json(responseData);
    }
    return res.json(response);
});

router.get('/', async (req: Request, res: Response) => {
    return res.json(await categoryService.getAll());
});


export default router;
