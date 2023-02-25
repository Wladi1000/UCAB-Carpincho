import { SPTG } from '../models/SPTG.js';
import { QueryTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
export const obtenerSPTG= async (req,res) => {
    const obtener = await SPTG.findAll();
    res.json(obtener);
};
export const crearSPTG = async (req,res) => {
    const {titulo, modalidad,id_ta,id_admin_evaluador} = req.body;
    try {
        const nuevo = await SPTG.create({
            titulo,
            modalidad,
            id_ta,
            id_admin_evaluador
        },
        {
            fields: ["titulo","modalidad","id_ta","id_admin_evaluador"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de SPTG", error: error.message })
    }
};
export const actualizarSPTG = async (req,res) => {
    const {titulo, modalidad,id_ta,id_admin_evaluador} = req.body;
    const id = req.params.id
    try {
        const buscar = await SPTG.findByPk(id);

        buscar.titulo = titulo;
        buscar.modalidad = modalidad;
        buscar.id_ta = id_ta;
        buscar.id_admin_evaluador = id_admin_evaluador;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "SPTG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar usuario", error: error.message});
    }
}

export const eliminarSPTG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await SPTG.destroy({
            where: {
                id_sptg: id
            }
        });
        res.status(204).json('La SPTG fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de SPTG", error: error.message })
    }
}

export const buscarSPTG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await SPTG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("SPTG no encontrado");
    }
}

export const datosEstudianteSPTG = async (req, res) => {
    try {
        const buscar = await sequelize.query("SELECT U.*,P.*, Pr.*,Ad.* FROM Usuarios as U, SPTG as P, realiza_SPTG as R, Estudiantes AS E,Profesores AS Pr, Administradores AS Ad WHERE U.id_usuario = E.id_estudiante AND E.id_estudiante = R.id_estudiante AND R.id_sptg = P.id_sptg AND P.id_ta = Pr.id_profesor AND P.id_admin_evaluador = Ad.id_administrador", { type: QueryTypes.SELECT });
        res.json(buscar)
    } catch (error) {
        return res.status(404).json("Error al buscar informacion");
    }
}

export const ultimoSPTG = async (req, res) => {
    try {
        const buscar = await sequelize.query('SELECT id_sptg FROM SPTG ORDER BY id_sptg DESC LIMIT 1', { type: QueryTypes.SELECT });
        res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error al buscar informacion");
    }
}