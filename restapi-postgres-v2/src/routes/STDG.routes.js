import { Router } from 'express';
import { obtenerSPTG } from '../controllers/SPTG.controller.js';

const router = Router();

router.get('/SPTG',obtenerSPTG);
router.post('/SPTG',);
router.put('/SPTG/:id',);
router.delete('/SPTG/:id',);
router.get('/SPTG/:id',);


export default router;