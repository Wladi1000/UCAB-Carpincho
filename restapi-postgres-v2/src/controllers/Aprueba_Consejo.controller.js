import { Aprueba_Consejo } from '../models/Aprueba_Consejo.js'
export const obtenerAprueba_Consejo = async (req,res) => {
    const obtener = await Aprueba_Consejo.findAll();
    res.json(obtener);
};
export const crearAprueba_Consejo = async (req,res) => {
    const { id_cde, id_ptg } = req.body;
    try {
        const nuevo = await Aprueba_Consejo.create({
            id_cde,
            id_ptg
        },
        {
            fields: ["id_cde","id_ptg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Aprueba_Consejo", error: error.message })
    }
};
export const actualizarAprueba_Consejo = async (req,res) => {
   const { id_cde, id_ptg, estatus,descripcion } = req.body;
    try {
        const buscar = await Aprueba_Consejo.findOne({
            where:{
                id_cde: id_cde,
                id_ptg: id_ptg
            }
        })

        buscar.estatus = estatus;
        buscar.descripcion = descripcion;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Aprueba_Consejo actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Aprueba_Consejo", error: error.message});
    }
}

export const eliminarAprueba_Consejo = async (req,res) => {
    const { id_cde, id_ptg } = req.body;
    try {
        const eliminar = await Aprueba_Consejo.destroy({
            where: {
                id_cde: id_cde,
                id_ptg: id_ptg
            }
        });
        res.status(204).json('El Aprueba_Consejo fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Aprueba_Consejo", error: error.message })
    }
}

export const buscarAprueba_Consejo = async (req, res) => {
    const { id_cde, id_ptg } = req.body;
    try {
        const buscar = await Aprueba_Consejo.findOne({
            where: {
                id_cde: id_cde,
                id_ptg: id_ptg
            }
        })
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Aprueba_Consejo no encontrado");
    }
}