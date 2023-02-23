import { PE_REVISOR_PTEG } from '../models/PE_REVISOR_PTEG.js'
export const obtenerPE_REVISOR_PTEG = async (req,res) => {
    const obtener = await PE_REVISOR_PTEG.findAll();
    res.json(obtener);
};
export const crearPE_REVISOR_PTEG = async (req,res) => {
    const { desicion_final, id_pteg } = req.body;
    try {
        const nuevo = await PE_REVISOR_PTEG.create({
           desicion_final,
           id_pteg
        },
        {
            fields: ["desicion_final", "id_pteg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_REVISOR_PTEG", error: error.message })
    }
};
export const actualizarPE_REVISOR_PTEG = async (req,res) => {
   const { id_pe_revisor_pteg, desicion_final, fecha_llenado, id_pteg } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_REVISOR_PTEG.findByPk(id);

        buscar.desicion_final = desicion_final;
        buscar.fecha_llenado = fecha_llenado;
        buscar.id_pteg = id_pteg;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_REVISOR_PTEG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_REVISOR_PTEG", error: error.message});
    }
}

export const eliminarPE_REVISOR_PTEG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PE_REVISOR_PTEG.destroy({
            where: {
                id_pe_revisor_pteg: id
            }
        });
        res.status(204).json('El PE_REVISOR_PTEG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_REVISOR_PTEG", error: error.message })
    }
}

export const buscarPE_REVISOR_PTEG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PE_REVISOR_PTEG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_REVISOR_PTEG no encontrado");
    }
}