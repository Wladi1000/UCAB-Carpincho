import {PE_final_TDGE} from '../models/PE_final_TDGE.js'
export const obtenerPE_final_TDGE = async (req,res) => {
    const obtener = await PE_final_TDGE.findAll();
    res.json(obtener);
};
export const crearPE_final_TDGE = async (req,res) => {
    const { estatus } = req.body;
    try {
        const nuevo = await PE_final_TDGE.create({
            estatus
        },
        {
            fields: ["estatus"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_final_TDGE", error: error.message })
    }
};
export const actualizarPE_final_TDGE = async (req,res) => {
   const { estatus, tipo_mencion,razon_mencion,nota_final,id_pe_ta_tdge } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_final_TDGE.findByPk(id);

        buscar.estatus = estatus;
        buscar.tipo_mencion =tipo_mencion;
        buscar.razon_mencion = razon_mencion;
        buscar.nota_final =nota_final;
        buscar.id_pe_ta_tdge =id_pe_ta_tdge;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_final_TDGE actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_final_TDGE", error: error.message});
    }
}

export const eliminarPE_final_TDGE = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PE_final_TDGE.destroy({
            where: {
                id_pe_final_tdge: id
            }
        });
        res.status(204).json('El PE_final_TDGE fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_final_TDGE", error: error.message })
    }
}

export const buscarPE_final_TDGE = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PE_final_TDGE.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PE_final_TDGE no encontrado");
    }
}