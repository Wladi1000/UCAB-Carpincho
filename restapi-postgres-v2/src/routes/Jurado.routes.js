import { Router } from 'express';
import {obtenerJurado,crearJurado,actualizarJurado,eliminarJurado,buscarJurado  } from '../controllers/Jurado.controller.js';

const router = Router();

router.get('/Jurado',obtenerJurado);
router.post('/Jurado',crearJurado)
router.put('/Jurado/:id',actualizarJurado);
router.delete('/Jurado/:id',eliminarJurado);
router.get('/Jurado/:id',buscarJurado);


export default router;