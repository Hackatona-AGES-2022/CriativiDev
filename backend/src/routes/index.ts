import { Router } from 'express';
import healthRouter from './health.router';
import userRouter from './user.route';
import categoryRouter from './category.router';
import solicitacaoRouter from './solicitacao.router';

const router = Router();
router.use(healthRouter);
router.use('/api/v1/categories', categoryRouter);

router.use('/solicitacoes', solicitacaoRouter)
router.use('/users', userRouter);

export default router;
