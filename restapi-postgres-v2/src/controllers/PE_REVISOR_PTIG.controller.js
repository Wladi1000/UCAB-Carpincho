import { PE_REVISOR_PTIG } from '../models/PE_REVISOR_PTIG.js'
export const obtenerPE_REVISOR_PTIG = async (req,res) => {
    const obtener = await PE_REVISOR_PTIG.findAll();
    res.json(obtener);
};
export const crearPE_REVISOR_PTIG = async (req,res) => {
    const { desicion_final, id_ptig } = req.body;
    try {
        const nuevo = await PE_REVISOR_PTIG.create({
            desicion_final,
            id_ptig
        },
        {
            fields: ["desicion_final", "id_ptig"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_REVISOR_PTIG", error: error.message })
    }
};
export const actualizarPE_REVISOR_PTIG = async (req,res) => {
   const { id_pe_revisor_ptig, desicion_final, fecha_llenado, id_ptig } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_REVISOR_PTIG.findByPk(id);

        buscar.desicion_final = desicion_final;
        buscar.fecha_llenado = fecha_llenado;
        buscar.id_ptig = id_ptig;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_REVISOR_PTIG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_REVISOR_PTIG", error: error.message});
    }
}

export const eliminarPE_REVISOR_PTIG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PE_REVISOR_PTIG.destroy({
            where: {
                id_pe_revisor_ptig: id
            }
        });
        res.status(204).json('El PE_REVISOR_PTIG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_REVISOR_PTIG", error: error.message })
    }
}

export const buscarPE_REVISOR_PTIG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PE_REVISOR_PTIG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_REVISOR_PTIG no encontrado");
    }
}