import {Contiene_Criterios_TDGI_TA} from '../models/Contiene_Criterios_TDGI_TA.js'
export const obtenerContiene_Criterios_TDGI_TA = async (req,res) => {
    const obtener = await Contiene_Criterios_TDGI_TA.findAll();
    res.json(obtener);
};
export const crearContiene_Criterios_TDGI_TA = async (req,res) => {
    const { id_pe_ta_tdgi, id_criterios_tdgi_ta } = req.body;
    try {
        const nuevo = await Contiene_Criterios_TDGI_TA.create({
            id_pe_ta_tdgi,
            id_criterios_tdgi_ta
        },
        {
            fields: ["id_pe_ta_tdgi","id_criterios_tdgi_ta"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Contiene_Criterios_TDGI_TA", error: error.message })
    }
};
export const actualizarContiene_Criterios_TDGI_TA = async (req,res) => {
    const { id_pe_ta_tdgi, id_criterios_tdgi_ta } = req.body;
    try {
        const buscar = await Contiene_Criterios_TDGI_TA.findOne({
            where: {
                id_pe_ta_tdgi: id_pe_ta_tdgi,
                id_criterios_tdgi_ta: id_criterios_tdgi_ta
            }
        });

        buscar.id_pe_ta_tdgi = id_pe_ta_tdgi;
        buscar.id_criterios_tdgi_ta = id_criterios_tdgi_ta;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Contiene_Criterios_TDGI_TA actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Contiene_Criterios_TDGI_TA", error: error.message});
    }
}

export const eliminarContiene_Criterios_TDGI_TA = async (req,res) => {
    const { id_pe_ta_tdgi, id_criterios_tdgi_ta } = req.body;
    try {
        const eliminar = await Contiene_Criterios_TDGI_TA.destroy({
            where: {
                id_pe_ta_tdgi: id_pe_ta_tdgi,
                id_criterios_tdgi_ta: id_criterios_tdgi_ta
            }
        });
        res.status(204).json('El Contiene_Criterios_TDGI_TA fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Contiene_Criterios_TDGI_TA", error: error.message })
    }
}

export const buscarContiene_Criterios_TDGI_TA = async (req, res) => {
    const { id_pe_ta_tdgi, id_criterios_tdgi_ta } = req.body;
    try {
        const buscar = await Contiene_Criterios_TDGI_TA.findOne({
            where:{
                id_pe_ta_tdgi: id_pe_ta_tdgi,
                id_criterios_tdgi_ta: id_criterios_tdgi_ta
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Contiene_Criterios_TDGI_TA no encontrado");
    }
}