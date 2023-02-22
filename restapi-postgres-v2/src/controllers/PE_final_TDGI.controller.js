import {PE_final_TDGI} from '../models/PE_final_TDGI.js'
export const obtenerPE_final_TDGI = async (req,res) => {
    const obtener = await PE_final_TDGI.findAll();
    res.json(obtener);
};
export const crearPE_final_TDGI = async (req,res) => {
    const { estatus } = req.body;
    try {
        const nuevo = await PE_final_TDGI.create({
            estatus
        },
        {
            fields: ["estatus"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PE_final_TDGI", error: error.message })
    }
};
export const actualizarPE_final_TDGI = async (req,res) => {
   const { estatus,tipo_mencion,razon_mencion,nota_final,id_pe_ta_tdgi } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PE_final_TDGI.findByPk(id);

        buscar.estatus = estatus;
        buscar.tipo_mencion = tipo_mencion;
        buscar.razon_mencion = razon_mencion;
        buscar.nota_final = nota_final;
        buscar.id_pe_ta_tdgi = id_pe_ta_tdgi;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PE_final_TDGI actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PE_final_TDGI", error: error.message});
    }
}

export const eliminarPE_final_TDGI = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PE_final_TDGI.destroy({
            where: {
                id_pe_final_tdgi: id
            }
        });
        res.status(204).json('El PE_final_TDGI fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PE_final_TDGI", error: error.message })
    }
}

export const buscarPE_final_TDGI= async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PE_final_TDGI.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("[] no encontrado");
    }
}