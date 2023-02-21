import { SPTG } from '../models/SPTG.js';

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