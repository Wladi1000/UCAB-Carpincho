import { Router } from 'express';
import { crearProfesionalesExternos,obtenerProfesionalesExternos,actualizarProfesionalesExternos,eliminarProfesionalesExternos,buscarProfesionalesExternos,buscarProfesionalesExternosByCedula } from '../controllers/ProfesionalesExternos.controller.js'
const router = Router();
router.get('/ProfesionalesExternos',obtenerProfesionalesExternos);
router.post('/ProfesionalesExternos',crearProfesionalesExternos);
router.put('/ProfesionalesExternos/:id',actualizarProfesionalesExternos);
router.delete('/ProfesionalesExternos/:id',eliminarProfesionalesExternos);
router.get('/ProfesionalesExternos/:id',buscarProfesionalesExternos);
router.get('/BuscarProfesional/:id',buscarProfesionalesExternosByCedula);


export default router;