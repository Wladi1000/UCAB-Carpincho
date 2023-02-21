import { PE_TE_TDGI } from '../models/PE_TE_TDGI.js'
export const obtenerPE_TE_TDGI = async (req,res) => {
    const obtener = await PE_TE_TDGI.findAll();
    res.json(obtener);
};
export const crearPE_TE_TDGI = async (req,res) => {
    const { estatus, nota_final } = req.body;
    try {
        const nuevo = await PE_TE_TDGI.create();
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_TE_TDGI", error: error.message })
    }
};
export const actualizarPE_TE_TDGI = async (req,res) => {
   const { estatus, nota_final } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_TE_TDGI.findByPk(id);

        buscar.estatus = estatus;
        buscar.nota_final = nota_final;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_TE_TDGI actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_TE_TDGI", error: error.message});
    }
}

export const eliminarPE_TE_TDGI = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PE_TE_TDGI.destroy({
            where: {
                id_pe_te_tdgi: id
            }
        });
        res.status(204).json('El PE_TE_TDGI fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_TE_TDGI", error: error.message })
    }
}

export const buscarPE_TE_TDGI = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PE_TE_TDGI.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_TE_TDGI no encontrado");
    }
}