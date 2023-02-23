import {Contiene_Criterios_TDGI_J} from '../models/Contiene_Criterios_TDGI_J.js'
export const obtenerContiene_Criterios_TDGI_J = async (req,res) => {
    const obtener = await Contiene_Criterios_TDGI_J.findAll();
    res.json(obtener);
};
export const crearContiene_Criterios_TDGI_J = async (req,res) => {
    const { id_pe_j_tdgi, id_criterios_tdgi_j } = req.body;
    try {
        const nuevo = await Contiene_Criterios_TDGI_J.create({
            id_pe_j_tdgi,
            id_criterios_tdgi_j
        },
        {
            fields: ["id_pe_j_tdgi", "id_criterios_tdgi_j"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de ", error: error.message })
    }
};
export const actualizarContiene_Criterios_TDGI_J = async (req,res) => {
    const { id_pe_j_tdgi, id_criterios_tdgi_j } = req.body;
    try {
        const buscar = await Contiene_Criterios_TDGI_J.findOne({
            where: {
                id_pe_j_tdgi: id_pe_j_tdgi,
                id_criterios_tdgi_j: id_criterios_tdgi_j
            }
        })

        buscar.id_pe_j_tdgi = id_pe_j_tdgi;
        buscar.id_criterios_tdgi_j = id_criterios_tdgi_j;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Contiene_Criterios_TDGI_J actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Contiene_Criterios_TDGI_J", error: error.message});
    }
}

export const eliminarContiene_Criterios_TDGI_J = async (req,res) => {
    const { id_pe_j_tdgi, id_criterios_tdgi_j } = req.body;
    try {
        const eliminar = await Contiene_Criterios_TDGI_J.destroy({
            where: {
                id_pe_j_tdgi: id_pe_j_tdgi,
                id_criterios_tdgi_j: id_criterios_tdgi_j
            }
        });
        res.status(204).json('El Contiene_Criterios_TDGI_J fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Contiene_Criterios_TDGI_J", error: error.message })
    }
}

export const buscarContiene_Criterios_TDGI_J = async (req, res) => {
    const { id_pe_j_tdgi, id_criterios_tdgi_j } = req.body;
    try {
        const buscar = await Contiene_Criterios_TDGI_J.findOne({
            where: {
                id_pe_j_tdgi: id_pe_j_tdgi,
                id_criterios_tdgi_j: id_criterios_tdgi_j
            }
        })
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Contiene_Criterios_TDGI_J no encontrado");
    }
}