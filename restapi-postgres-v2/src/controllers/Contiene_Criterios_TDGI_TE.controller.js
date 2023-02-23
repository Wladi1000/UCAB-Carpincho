import {Contiene_Criterios_TDGI_TE} from '../models/Contiene_Criterios_TDGI_TE.js'
export const obtenerContiene_Criterios_TDGI_TE = async (req,res) => {
    const obtener = await Contiene_Criterios_TDGI_TE.findAll();
    res.json(obtener);
};
export const crearContiene_Criterios_TDGI_TE = async (req,res) => {
    const { id_pe_te_tdgi, id_criterios_tdgi_te } = req.body;
    try {
        const nuevo = await Contiene_Criterios_TDGI_TE.create({
            id_pe_te_tdgi,
            id_criterios_tdgi_te
        },
        {
            fields: ["id_pe_te_tdgi", "id_criterios_tdgi_te"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Contiene_Criterios_TDGI_TE", error: error.message })
    }
};
export const actualizarContiene_Criterios_TDGI_TE = async (req,res) => {
    const { id_pe_te_tdgi, id_criterios_tdgi_te } = req.body;
    try {
        const buscar = await Contiene_Criterios_TDGI_TE.findOne({
            where: {
                id_pe_te_tdgi: id_pe_te_tdgi,
                id_criterios_tdgi_te: id_criterios_tdgi_te
            }
        })

        buscar.id_pe_te_tdgi = id_pe_te_tdgi;
        buscar.id_criterios_tdgi_te = id_criterios_tdgi_te;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Contiene_Criterios_TDGI_TE actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Contiene_Criterios_TDGI_TE", error: error.message});
    }
}

export const eliminarContiene_Criterios_TDGI_TE = async (req,res) => {
    const { id_pe_te_tdgi, id_criterios_tdgi_te } = req.body;
    try {
        const eliminar = await Contiene_Criterios_TDGI_TE.destroy({
            where: {
                id_pe_te_tdgi: id_pe_te_tdgi,
                id_criterios_tdgi_te: id_criterios_tdgi_te
            }
        });
        res.status(204).json('El Contiene_Criterios_TDGI_TE fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Contiene_Criterios_TDGI_TE", error: error.message })
    }
}

export const buscarContiene_Criterios_TDGI_TE = async (req, res) => {
    const { id_pe_te_tdgi, id_criterios_tdgi_te } = req.body;
    try {
        const buscar = await Contiene_Criterios_TDGI_TE.findOne({
            where: {
                id_pe_te_tdgi: id_pe_te_tdgi,
                id_criterios_tdgi_te: id_criterios_tdgi_te
            }
        })
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("buscarContiene_Criterios_TDGI_TE no encontrado");
    }
}