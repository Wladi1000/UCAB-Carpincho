import { Router } from 'express';
import { obtenerContiene_Criterios_TDGI_TE, 
    crearContiene_Criterios_TDGI_TE, 
    actualizarContiene_Criterios_TDGI_TE, 
    eliminarContiene_Criterios_TDGI_TE,
    buscarContiene_Criterios_TDGI_TE } from '../controllers/Contiene_Criterios_TDGI_TE.controller.js';

const router = Router();

router.get('/Contiene_Criterios_TDGI_TE',obtenerContiene_Criterios_TDGI_TE);
router.post('/Contiene_Criterios_TDGI_TE',crearContiene_Criterios_TDGI_TE)
router.put('/Contiene_Criterios_TDGI_TE/',actualizarContiene_Criterios_TDGI_TE);
router.delete('/Contiene_Criterios_TDGI_TE/',eliminarContiene_Criterios_TDGI_TE);
router.get('/Contiene_Criterios_TDGI_TE/buscar',buscarContiene_Criterios_TDGI_TE);


export default router;