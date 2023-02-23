import { Router } from 'express';
import { obtenerContiene_Criterios_TDGI_J, 
    crearContiene_Criterios_TDGI_J, 
    actualizarContiene_Criterios_TDGI_J, 
    eliminarContiene_Criterios_TDGI_J,
    buscarContiene_Criterios_TDGI_J } from '../controllers/Contiene_Criterios_TDGI_J.controller.js';

const router = Router();

router.get('/Contiene_Criterios_TDGI_J',obtenerContiene_Criterios_TDGI_J);
router.post('/Contiene_Criterios_TDGI_J',crearContiene_Criterios_TDGI_J)
router.put('/Contiene_Criterios_TDGI_J/',actualizarContiene_Criterios_TDGI_J);
router.delete('/Contiene_Criterios_TDGI_J/',eliminarContiene_Criterios_TDGI_J);
router.get('/Contiene_Criterios_TDGI_J/buscar',buscarContiene_Criterios_TDGI_J);


export default router;