import { Router } from 'express';
import { 
    obtenerPTG,
    crearPTG,
    actualizarPTG,
    eliminarPTG, 
    buscarPTG,
    buscarAlumnos, 
    buscarTutorAcademico, 
    buscarTutorEmpresarial,
    buscarEmpresaSPTG,
    aprobarCDEPTG,
    aprobarComitePTG,
    rechazarCDEPTG,
    rechazarComitePTG
} from '../controllers/PTG.controller.js';

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

router.get('/rechazarComitePTG/:id',rechazarComitePTG);
router.get('/rechazarCDEPTG/:id',rechazarCDEPTG);
router.get('/aprobarComitePTG/:id',aprobarComitePTG);
router.get('/aprobarCDEPTG/:id',aprobarCDEPTG);


export default router;