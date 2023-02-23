import { Router } from 'express';
import { obtenerContiene_Criterios_TDGE_TA, 
    crearContiene_Criterios_TDGE_TA, 
    actualizarContiene_Criterios_TDGE_TA, 
    eliminarContiene_Criterios_TDGE_TA,
     buscarContiene_Criterios_TDGE_TA} from '../controllers/Contiene_Criterios_TDGE_TA.controller.js';

const router = Router();

router.get('/Contiene_Criterios_TDGE_TA',obtenerContiene_Criterios_TDGE_TA);
router.post('/Contiene_Criterios_TDGE_TA',crearContiene_Criterios_TDGE_TA)
router.put('/Contiene_Criterios_TDGE_TA/',actualizarContiene_Criterios_TDGE_TA);
router.delete('/Contiene_Criterios_TDGE_TA/',eliminarContiene_Criterios_TDGE_TA);
router.get('/Contiene_Criterios_TDGE_TA/buscar',buscarContiene_Criterios_TDGE_TA);


export default router;