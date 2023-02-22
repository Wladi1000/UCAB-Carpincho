import { Router } from 'express';
import { actualizarCriterios_Rev_TIG, buscarCriterios_Rev_TIG, crearCriterios_Rev_TIG, eliminarCriterios_Rev_TIG, obtenerCriterios_Rev_TIG } from '../controllers/Criterios_Rev_TIG.controller.js';

const router = Router();
router.get('/Criterios_Rev_TIG',obtenerCriterios_Rev_TIG);
router.post('/Criterios_Rev_TIG',crearCriterios_Rev_TIG);
router.put('/Criterios_Rev_TIG/:id',actualizarCriterios_Rev_TIG);
router.delete('/Criterios_Rev_TIG/:id',eliminarCriterios_Rev_TIG);
router.get('/Criterios_Rev_TIG/:id',buscarCriterios_Rev_TIG);


export default router;