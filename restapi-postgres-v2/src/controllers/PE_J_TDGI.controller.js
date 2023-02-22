import { PE_J_TDGI } from '../models/PE_J_TDGI.js'
export const obtenerPE_J_TDGI = async (req,res) => {
    const obtener = await PE_J_TDGI.findAll();
    res.json(obtener);
};
export const crearPE_J_TDGI = async (req,res) => {
    const { estatus, nota_final } = req.body;
    try {
        const nuevo = await PE_J_TDGI.create()
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_J_TDGI", error: error.message })
    }
};
export const actualizarPE_J_TDGI = async (req,res) => {
   const { estatus, nota_final } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_J_TDGI.findByPk(id);

        buscar.estatus = estatus;
        buscar.nota_final = nota_final;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_J_TDGI actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_J_TDGI", error: error.message});
    }
}

export const eliminarPE_J_TDGI = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PE_J_TDGI.destroy({
            where: {
                id_pe_j_tdgi: id
            }
        });
        res.status(204).json('El PE_J_TDGI fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_J_TDGI", error: error.message })
    }
}

export const buscarPE_J_TDGI = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PE_J_TDGI.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_J_TDGI no encontrado");
    }
}