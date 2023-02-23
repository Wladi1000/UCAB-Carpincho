import { PE_Contiene_CTEG } from '../models/PE_Contiene_CTEG.js'
export const obtenerPE_Contiene_CTEG = async (req,res) => {
    const obtener = await PE_Contiene_CTEG.findAll();
    res.json(obtener);
};
export const crearPE_Contiene_CTEG = async (req,res) => {
    const { id_pe_revisor_pteg, id_criterios_rev_teg } = req.body;
    try {
        const nuevo = await PE_Contiene_CTEG.create({
            id_pe_revisor_pteg,
            id_criterios_rev_teg
        },
        {
            fields: ["id_criterios_rev_teg","id_criterios_rev_teg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_Contiene_CTEG", error: error.message })
    }
};
export const actualizarPE_Contiene_CTEG = async (req,res) => {
   const {id_pe_revisor_pteg, id_criterios_rev_teg,aprobacion,nota} = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_Contiene_CTEG.findOne({
            where: {
                id_pe_revisor_pteg: id_pe_revisor_pteg,
                id_criterios_rev_teg: id_criterios_rev_teg
            }
        });

        buscar.aprobacion = aprobacion;
        buscar.nota = nota;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_Contiene_CTEG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_Contiene_CTEG", error: error.message});
    }
}

export const eliminarPE_Contiene_CTEG = async (req,res) => {
    const { id_pe_revisor_pteg, id_criterios_rev_teg } = req.body;
    try {
        const eliminar = await PE_Contiene_CTEG.destroy({
            where: {
                id_pe_revisor_pteg: id_pe_revisor_pteg,
                id_criterios_rev_teg: id_criterios_rev_teg
            }
        });
        res.status(204).json('El PE_Contiene_CTEG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_Contiene_CTEG", error: error.message })
    }
}

export const buscarPE_Contiene_CTEG = async (req, res) => {
    const { id_pe_revisor_pteg, id_criterios_rev_teg } = req.body;
    try {
        const buscar = await PE_Contiene_CTEG.findOne({
            where: {
                id_pe_revisor_pteg: id_pe_revisor_pteg,
                id_criterios_rev_teg: id_criterios_rev_teg
            }
        })
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_Contiene_CTEG no encontrado");
    }
}