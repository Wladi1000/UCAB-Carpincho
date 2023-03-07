import { Router } from 'express';
import { obtenerPTG,crearPTG,actualizarPTG,eliminarPTG, buscarPTG,buscarAlumnos, buscarTutorAcademico, buscarTutorEmpresarial, buscarEmpresaSPTG } from '../controllers/PTG.controller.js';

const router = Router();

router.get('/PTG', obtenerPTG);
router.post('/PTG', crearPTG)
router.put('/PTG/:id', actualizarPTG);
router.delete('/PTG/:id',eliminarPTG);
router.get('/PTG/:id',buscarPTG);
router.get('/buscarAlumnos/:id',buscarAlumnos);
router.get('/buscarTutorAcademico/:id',buscarTutorAcademico);
router.get('/buscarEmpresaPTG/:id',buscarEmpresaSPTG);
router.get('/buscarTutorEmpresarial/:id',buscarTutorEmpresarial);


export default router;