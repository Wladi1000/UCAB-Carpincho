import {Contiene_PE_TE_TDGI} from '../models/Contiene_PE_TE_TDGI.js'
export const obtenerContiene_PE_TE_TDGI = async (req,res) => {
    const obtener = await Contiene_PE_TE_TDGI.findAll();
    res.json(obtener);
};
export const crearContiene_PE_TE_TDGI = async (req,res) => {
    const { id_pe_j_tdgi, id_pe_te_tdgi,nota_te } = req.body;
    try {
        const nuevo = await Contiene_PE_TE_TDGI.create({
            id_pe_j_tdgi,
            id_pe_te_tdgi,
            nota_te
        },
        {
            fields: ["id_pe_j_tdgi","id_pe_te_tdgi","nota_te"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Contiene_PE_TE_TDGI", error: error.message })
    }
};
export const actualizarContiene_PE_TE_TDGI = async (req,res) => {
   const { id_pe_j_tdgi, id_pe_te_tdgi,nota_te } = req.body;
    try {
        const buscar = await Contiene_PE_TE_TDGI.findOne({
            where: {
                id_pe_j_tdgi: id_pe_j_tdgi,
                id_pe_te_tdgi: id_pe_te_tdgi
            }
        });

        buscar.id_pe_j_tdgi = id_pe_j_tdgi;
        buscar.id_pe_te_tdgi = id_pe_te_tdgi;
        buscar.nota_te = nota_te;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Contiene_PE_TE_TDGI actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Contiene_PE_TE_TDGI", error: error.message});
    }
}

export const eliminarContiene_PE_TE_TDGI = async (req,res) => {
    const { id_pe_j_tdgi, id_pe_te_tdgi } = req.body
    try {
        
        const eliminar = await Contiene_PE_TE_TDGI.destroy({
            where: {
                id_pe_j_tdgi: id_pe_j_tdgi,
                id_pe_te_tdgi: id_pe_te_tdgi
            }
        });
        res.status(204).json('El Contiene_PE_TE_TDGI fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Contiene_PE_TE_TDGI", error: error.message })
    }
}

export const buscarContiene_PE_TE_TDGI = async (req, res) => {
    const { id_pe_j_tdgi, id_pe_te_tdgi } = req.body
    try {
        const buscar = await Contiene_PE_TE_TDGI.findOne({
            where: {
                id_pe_j_tdgi: id_pe_j_tdgi,
                id_pe_te_tdgi: id_pe_te_tdgi
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Contiene_PE_TE_TDGI no encontrado");
    }
}