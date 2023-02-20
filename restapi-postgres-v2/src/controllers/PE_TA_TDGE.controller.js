import { PE_TA_TDGE } from '../models/PE_TA_TDGE.js'
export const obtenerPE_TA_TDGE = async (req,res) => {
    const obtener = await PE_TA_TDGE.findAll();
    res.json(obtener);
};
export const crearPE_TA_TDGE = async (req,res) => {
    const { estatus, nota_final } = req.body;
    try {
        const nuevo = await PE_TA_TDGE.create()
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_TA_TDGE", error: error.message })
    }
};
export const actualizarPE_TA_TDGE = async (req,res) => {
   const { estatus, nota_final } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_TA_TDGE.findByPk(id);

        buscar.estatus = estatus;
        buscar.nota_final = nota_final;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_TA_TDGE actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_TA_TDGE", error: error.message});
    }
}

export const eliminarPE_TA_TDGE = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PE_TA_TDGE.destroy({
            where: {
                id_pe_ta_tdge: id
            }
        });
        res.status(204).json('El PE_TA_TDGE fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_TA_TDGE", error: error.message })
    }
}

export const buscarPE_TA_TDGE = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PE_TA_TDGE.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_TA_TDGE no encontrado");
    }
}