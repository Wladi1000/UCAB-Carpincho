import { Router } from 'express';
import { obtenerevalua_SPTG,crearevalua_SPTG,actualizarevalua_SPTG,eliminarevalua_SPTG,buscarevalua_SPTG} from '../controllers/evalua_SPTG.controller.js';

const router = Router();

router.get('/evalua_SPTG',obtenerevalua_SPTG);
router.post('/evalua_SPTG',crearevalua_SPTG);
router.put('/evalua_SPTG/',actualizarevalua_SPTG);
router.delete('/evalua_SPTG/',eliminarevalua_SPTG);
router.get('/evalua_SPTG/buscar',buscarevalua_SPTG);

export default router;