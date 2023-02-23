import {Contiene_Criterios_TDGE_TA} from '../models/Contiene_Criterios_TDGE_TA.js'
export const obtenerContiene_Criterios_TDGE_TA = async (req,res) => {
    const obtener = await Contiene_Criterios_TDGE_TA.findAll();
    res.json(obtener);
};
export const crearContiene_Criterios_TDGE_TA = async (req,res) => {
    const { id_pe_ta_tdge, id_criterios_tdge_ta } = req.body;
    try {
        const nuevo = await Contiene_Criterios_TDGE_TA.create({
            id_pe_ta_tdge,
            id_criterios_tdge_ta
        },
        {
            fields: ["id_pe_ta_tdge","id_criterios_tdge_ta"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Contiene_Criterios_TDGE_J", error: error.message })
    }
};
export const actualizarContiene_Criterios_TDGE_TA = async (req,res) => {
    const { id_pe_ta_tdge, id_criterios_tdge_ta } = req.body;
    try {
        const buscar = await Contiene_Criterios_TDGE_TA.findOne({
            where: {
                id_pe_ta_tdge: id_pe_ta_tdge,
                id_criterios_tdge_ta: id_criterios_tdge_ta
            }
        })

        buscar.id_pe_ta_tdge = id_pe_ta_tdge;
        buscar.id_criterios_tdge_ta = id_criterios_tdge_ta;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Contiene_Criterios_TDGE_J actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Contiene_Criterios_TDGE_J", error: error.message});
    }
}

export const eliminarContiene_Criterios_TDGE_TA = async (req,res) => {
    const { id_pe_ta_tdge, id_criterios_tdge_ta } = req.body;
    try {
        const eliminar = await Contiene_Criterios_TDGE_TA.destroy({
            where: {
                id_criterios_tdge_ta: id_criterios_tdge_ta,
                id_pe_ta_tdge: id_pe_ta_tdge
            }
        });
        res.status(204).json('El Contiene_Criterios_TDGE_J  fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Contiene_Criterios_TDGE_J ", error: error.message })
    }
}

export const buscarContiene_Criterios_TDGE_TA  = async (req, res) => {
    const { id_pe_ta_tdge, id_criterios_tdge_ta } = req.body;
    try {
        const buscar = await Contiene_Criterios_TDGE_TA.findOne({
            where: {
                id_pe_ta_tdge: id_pe_ta_tdge,
                id_criterios_tdge_ta: id_criterios_tdge_ta
            }
        })
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Contiene_Criterios_TDGE_J no encontrado");
    }
}