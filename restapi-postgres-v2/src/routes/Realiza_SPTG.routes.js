import { Router } from 'express';
import { obtenerrealiza_SPTG,crearrealiza_SPTG,actualizarrealiza_SPTG,eliminarrealiza_SPTG,buscarrealiza_SPTG } from '../controllers/Realiza_SPTG.controller.js';

const router = Router();

router.get('/Realiza_SPTG',obtenerrealiza_SPTG);
router.post('/Realiza_SPTG',crearrealiza_SPTG)
router.put('/Realiza_SPTG/',actualizarrealiza_SPTG);
router.delete('/Realiza_SPTG/',eliminarrealiza_SPTG);
router.get('/Realiza_SPTG/',buscarrealiza_SPTG);


export default router;