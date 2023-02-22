import { PE_TA_TDGI } from '../models/PE_TA_TDGI.js'
export const obtenerPE_TA_TDGI = async (req,res) => {
    const obtener = await PE_TA_TDGI.findAll();
    res.json(obtener);
};
export const crearPE_TA_TDGI = async (req,res) => {
    const { estatus, nota_final,id_pe_te_tdgi } = req.body;
    try {
        const nuevo = await PE_TA_TDGI.create({
            estatus,
            nota_final,
            id_pe_te_tdgi
        },{
            fields: ["estatus","nota_final","id_pe_te_tdgi"]
        })
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_TA_TDGI", error: error.message })
    }
};
export const actualizarPE_TA_TDGI = async (req,res) => {
   const { estatus, nota_final,id_pe_te_tdgi } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_TA_TDGI.findByPk(id);

        buscar.estatus = estatus;
        buscar.nota_final = nota_final;
        buscar.id_pe_te_tdgi = id_pe_te_tdgi;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_TA_TDGI actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_TA_TDGI", error: error.message});
    }
}

export const eliminarPE_TA_TDGI = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PE_TA_TDGI.destroy({
            where: {
                id_pe_ta_tdgi: id
            }
        });
        res.status(204).json('El PE_TA_TDGI fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_TA_TDGI", error: error.message })
    }
}

export const buscarPE_TA_TDGI = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PE_TA_TDGI.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_TA_TDGI no encontrado");
    }
}