import { Router } from 'express';
import { obtenerUsuarios, crearUsuarios, eliminarUsuarios, actualizarUsuarios, buscarUsuarios,  } from '../controllers/Usuarios.controller.js';

const router = Router();
router.get('/Usuarios',obtenerUsuarios);
router.post('/Usuarios',crearUsuarios);
router.put('/Usuarios/:id',actualizarUsuarios);
router.delete('/Usuarios/:id',eliminarUsuarios);
router.get('/Usuarios/:id',buscarUsuarios);


export default router;