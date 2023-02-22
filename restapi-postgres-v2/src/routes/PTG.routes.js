import { Router } from 'express';
import { obtenerPTG,crearPTG,actualizarPTG,eliminarPTG, buscarPTG } from '../controllers/PTG.controller.js';

const router = Router();

router.get('/PTG', obtenerPTG);
router.post('/PTG', crearPTG)
router.put('/PTG/:id', actualizarPTG);
router.delete('/PTG/:id',eliminarPTG);
router.get('/PTG/:id',buscarPTG);


export default router;