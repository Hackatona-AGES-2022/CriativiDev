import { Router } from 'express';
import healthcheck from '../services/health.service';

const router = Router();

router.get('/health', healthcheck);

export default router;
