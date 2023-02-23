import { Router } from 'express';
import { obtenerContiene_Criterios_TDGI_TA, 
    crearContiene_Criterios_TDGI_TA, 
    actualizarContiene_Criterios_TDGI_TA, 
    eliminarContiene_Criterios_TDGI_TA,
    buscarContiene_Criterios_TDGI_TA } from '../controllers/Contiene_Criterios_TDGI_TA.controller.js';

const router = Router();

router.get('/Contiene_Criterios_TDGI_TA',obtenerContiene_Criterios_TDGI_TA);
router.post('/Contiene_Criterios_TDGI_TA',crearContiene_Criterios_TDGI_TA)
router.put('/Contiene_Criterios_TDGI_TA/',actualizarContiene_Criterios_TDGI_TA);
router.delete('/Contiene_Criterios_TDGI_TA/',eliminarContiene_Criterios_TDGI_TA);
router.get('/Contiene_Criterios_TDGI_TA/buscar',buscarContiene_Criterios_TDGI_TA);


export default router;