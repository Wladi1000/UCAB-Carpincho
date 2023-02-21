import { PE_J_TDGE } from '../models/PE_J_TDGE.js'
export const obtenerPE_J_TDGE = async (req,res) => {
    const obtener = await PE_J_TDGE.findAll();
    res.json(obtener);
};
export const crearPE_J_TDGE = async (req,res) => {
    const { estatus, nota_final } = req.body;
    try {
        const nuevo = await PE_J_TDGE.create()
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_J_TDGE", error: error.message })
    }
};
export const actualizarPE_J_TDGE = async (req,res) => {
   const { estatus, nota_final } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_J_TDGE.findByPk(id);

        buscar.estatus = estatus;
        buscar.nota_final = nota_final;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_J_TDGE actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_J_TDGE", error: error.message});
    }
}

export const eliminarPE_J_TDGE = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PE_J_TDGE.destroy({
            where: {
                id_pe_j_tdge: id
            }
        });
        res.status(204).json('El PE_J_TDGE fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_J_TDGE", error: error.message })
    }
}

export const buscarPE_J_TDGE = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PE_J_TDGE.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_J_TDGE no encontrado");
    }
}