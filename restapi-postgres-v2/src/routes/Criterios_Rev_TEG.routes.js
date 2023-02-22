import { Router } from 'express';
import { actualizarCriterios_Rev_TEG, buscarCriterios_Rev_TEG, crearCriterios_Rev_TEG, eliminarCriterios_Rev_TEG, obtenerCriterios_Rev_TEG } from '../controllers/Criterios_Rev_TEG.controller.js';

const router = Router();
router.get('/Criterios_Rev_TEG',obtenerCriterios_Rev_TEG);
router.post('/Criterios_Rev_TEG',crearCriterios_Rev_TEG);
router.put('/Criterios_Rev_TEG/:id',actualizarCriterios_Rev_TEG);
router.delete('/Criterios_Rev_TEG/:id',eliminarCriterios_Rev_TEG);
router.get('/Criterios_Rev_TEG/:id',buscarCriterios_Rev_TEG);


export default router;