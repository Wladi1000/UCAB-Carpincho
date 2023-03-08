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
    rechazarComitePTG,
    obtenerPTGPR,
    obtenerPTGPE,
    asignarRevisor,
    aprobarRevisorPTG,
    rechazarRevisorPTG
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

router.get('/PTG/estatus/PR',obtenerPTGPR);
router.get('/PTG/estatus/PE',obtenerPTGPE);
router.put('/asignarRevisor/:id',asignarRevisor);
router.put('/PTG/aprobarRevisor/:id',aprobarRevisorPTG);
router.put('/PTG/rechazarRevisor/:id',rechazarRevisorPTG);



export default router;