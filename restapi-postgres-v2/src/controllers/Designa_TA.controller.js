import { Designa_TA } from '../models/Designa_TA.js'
export const obtenerDesigna_TA = async (req,res) => {
    const obtener = await Designa_TA.findAll();
    res.json(obtener);
};
export const crearDesigna_TA = async (req,res) => {
    const { id_cde, id_profesor, id_tdg } = req.body;
    try {
        const nuevo = await Designa_TA.create({
            id_cde,
            id_profesor,
            id_tdg
        },
        {
            fields: ["id_cde","id_profesor","id_tdg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Designa_TA", error: error.message })
    }
};
export const actualizarDesigna_TA = async (req,res) => {
    const { id_cde, id_profesor, id_tdg, fecha_designacion } = req.body;
    try {
        const buscar = await Designa_TA.findOne({
            where: {
                id_cde: id_cde,
                id_profesor: id_profesor,
                id_tdg: id_tdg
            }
        })

        buscar.fecha_designacion = fecha_designacion;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Designa_TA actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Designa_TA", error: error.message});
    }
}

export const eliminarDesigna_TA = async (req,res) => {
    const { id_cde, id_profesor, id_tdg } = req.body;
    try {
        const eliminar = await Designa_TA.destroy({
            where: {
                id_cde: id_cde,
                id_profesor: id_profesor,
                id_tdg: id_tdg
            }
        });
        res.status(204).json('El Designa_TA fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Designa_TA", error: error.message })
    }
}

export const buscarDesigna_TA = async (req, res) => {
    const { id_cde, id_profesor, id_tdg } = req.body;
    try {
        const buscar = await Designa_TA.findOne({
            where: {
                id_cde: id_cde,
                id_profesor: id_profesor,
                id_tdg: id_tdg
            }
        })
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Designa_TA no encontrado");
    }
}