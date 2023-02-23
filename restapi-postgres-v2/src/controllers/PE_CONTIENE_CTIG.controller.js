import {PE_Contiene_CTIG} from '../models/PE_Contiene_CTIG.js'
export const obtenerPE_Contiene_CTIG = async (req,res) => {
    const obtener = await PE_Contiene_CTIG.findAll();
    res.json(obtener);
};
export const crearPE_Contiene_CTIG = async (req,res) => {
    const { id_pe_revisor_ptig, id_criterios_rev_tig } = req.body;
    try {
        const nuevo = await PE_Contiene_CTIG.create({
            id_pe_revisor_ptig,
            id_criterios_rev_tig
        },
        {
            fields: ["id_pe_revisor_ptig","id_criterios_rev_tig"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_Contiene_CTIG", error: error.message })
    }
};
export const actualizarPE_Contiene_CTIG = async (req,res) => {
   const { id_pe_revisor_ptig, id_criterios_rev_tig, aprobacion, nota } = req.body;
    try {
        const buscar = await PE_Contiene_CTIG.findOne({
            where: {
                id_pe_revisor_ptig: id_pe_revisor_ptig,
                id_criterios_rev_tig: id_criterios_rev_tig
            }
        })

        buscar.aprobacion = aprobacion;
        buscar.nota = nota;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_Contiene_CTIG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_Contiene_CTIG", error: error.message});
    }
}

export const eliminarPE_Contiene_CTIG = async (req,res) => {
    const { id_pe_revisor_ptig, id_criterios_rev_tig } = req.body;
    try {
        const eliminar = await PE_Contiene_CTIG.destroy({
            where: {
                id_pe_revisor_ptig: id_pe_revisor_ptig,
                id_criterios_rev_tig: id_criterios_rev_tig
            }
        });
        res.status(204).json('El PE_Contiene_CTIG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_Contiene_CTIG", error: error.message })
    }
}

export const buscarPE_Contiene_CTIG = async (req, res) => {
    const { id_pe_revisor_ptig, id_criterios_rev_tig } = req.body;
    try {
        const buscar = await PE_Contiene_CTIG.findOne({
            where: {
                id_pe_revisor_ptig: id_pe_revisor_ptig,
                id_criterios_rev_tig: id_criterios_rev_tig
            }}
        );
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_Contiene_CTIG no encontrado");
    }
}