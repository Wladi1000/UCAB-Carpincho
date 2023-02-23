import {Aprueba_Comite} from '../models/Aprueba_Comite.js'
export const obtenerAprueba_Comite = async (req,res) => {
    const obtener = await Aprueba_Comite.findAll();
    res.json(obtener);
};
export const crearAprueba_Comite = async (req,res) => {
    const { id_ctg, id_ptg } = req.body;
    try {
        const nuevo = await Aprueba_Comite.create({
            id_ctg,
            id_ptg
        },
        {
            fields: ["id_ctg","id_ptg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Aprueba_Comite", error: error.message })
    }
};
export const actualizarAprueba_Comite = async (req,res) => {
    const { id_ctg, id_ptg, estatus, fecha_comite, descripcion } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Aprueba_Comite .findOne({
            where: {
                id_ctg: id_ctg,
                id_ptg: id_ptg
            }
        });

        buscar.estatus = estatus;
        buscar.fecha_comite = fecha_comite;
        buscar.descripcion = descripcion;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Aprueba_Comite actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Aprueba_Comite", error: error.message});
    }
}

export const eliminarAprueba_Comite = async (req,res) => {
    const { id_ctg, id_ptg } = req.body;
    try {
        const eliminar = await Aprueba_Comite.destroy({
            where: {
                id_ctg: id_ctg,
                id_ptg: id_ptg
            }
        });
        res.status(204).json('El Aprueba_Comite fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Aprueba_Comite", error: error.message })
    }
}

export const buscarAprueba_Comite = async (req, res) => {
    const { id_ctg, id_ptg } = req.body;
    try {
        const buscar = await Aprueba_Comite.findOne({
            id_ctg: id_ctg,
            id_ptg: id_ptg
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Aprueba_Comite no encontrado");
    }
}