import { Router } from 'express';
import { actualizarAdministradores, buscarAdministradores, crearAdministradores, eliminarAdministradores, obtenerAdministradores } from '../controllers/Administradores.controller.js'
const router = Router();
router.get('/Administradores',obtenerAdministradores);
router.post('/Administradores',crearAdministradores);
router.put('/Administradores/:id',actualizarAdministradores);
router.delete('/Administradores/:id',eliminarAdministradores);
router.get('/Administradores/:id',buscarAdministradores);


export default router;