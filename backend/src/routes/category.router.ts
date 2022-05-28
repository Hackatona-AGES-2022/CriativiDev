import { Router, Request, Response } from 'express';
import * as categoryService from '../services/category.service';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    const categoryId = Number(req.params.id);
    return res.json(await categoryService.getById(categoryId));
});

router.get('/', async (req: Request, res: Response) => {
    return res.json(await categoryService.getAll());
});


export default router;
