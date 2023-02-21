import { Router } from 'express';
import { crearProfesionalesExternos,obtenerProfesionalesExternos,actualizarProfesionalesExternos,eliminarProfesionalesExternos,buscarProfesionalesExternos } from '../controllers/ProfesionalesExternos.controller.js'
const router = Router();
router.get('/ProfesionalesExternos',obtenerProfesionalesExternos);
router.post('/ProfesionalesExternos',crearProfesionalesExternos);
router.put('/ProfesionalesExternos/:id',actualizarProfesionalesExternos);
router.delete('/ProfesionalesExternos/:id',eliminarProfesionalesExternos);
router.get('/ProfesionalesExternos/:id',buscarProfesionalesExternos);


export default router;