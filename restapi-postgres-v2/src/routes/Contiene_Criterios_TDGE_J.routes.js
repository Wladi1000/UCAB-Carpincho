import { Router } from 'express';
import { obtenerContiene_Criterios_TDGE_J, 
    crearContiene_Criterios_TDGE_J, 
    actualizarContiene_Criterios_TDGE_J, 
    eliminarContiene_Criterios_TDGE_J,
    buscarContiene_Criterios_TDGE_J } from '../controllers/Contiene_Criterios_TDGE_J.controller.js';

const router = Router();

router.get('/Contiene_Criterios_TDGE_J',obtenerContiene_Criterios_TDGE_J);
router.post('/Contiene_Criterios_TDGE_J',crearContiene_Criterios_TDGE_J)
router.put('/Contiene_Criterios_TDGE_J/',actualizarContiene_Criterios_TDGE_J);
router.delete('/Contiene_Criterios_TDGE_J/',eliminarContiene_Criterios_TDGE_J);
router.get('/Contiene_Criterios_TDGE_J/buscar',buscarContiene_Criterios_TDGE_J);


export default router;