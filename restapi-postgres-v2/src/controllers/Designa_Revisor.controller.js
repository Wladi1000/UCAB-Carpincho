import {Designa_Revisor} from '../models/Designa_Revisor.js'
export const obtenerDesigna_Revisor = async (req,res) => {
    const obtener = await Designa_Revisor.findAll();
    res.json(obtener);
};
export const crearDesigna_Revisor = async (req,res) => {
    const { id_ctg, id_profesorrevisor, id_ptg } = req.body;
    try {
        const nuevo = await Designa_Revisor.create({
            id_ctg,
            id_profesorrevisor,
            id_ptg
        },
        {
            fields: ["id_ctg","id_profesorrevisor", "id_ptg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Designa_Revisor", error: error.message })
    }
};
export const actualizarDesigna_Revisor = async (req,res) => {
   const { id_ctg, id_profesorrevisor, id_ptg, fecha_designacion} = req.body;
    const id = req.params.id;
    try {
        const buscar = await Designa_Revisor.findOne({
            id_ctg: id_ctg,
            id_profesorrevisor: id_profesorrevisor,
            id_ptg: id_ptg
        });

        buscar.fecha_designacion = fecha_designacion;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Designa_Revisor actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Designa_Revisor", error: error.message});
    }
}

export const eliminarDesigna_Revisor = async (req,res) => {
    const { id_ctg, id_profesorrevisor, id_ptg } = req.body;
    try {
        const eliminar = await Designa_Revisor.destroy({
            where: {
                id_ctg: id_ctg,
                id_profesorrevisor: id_profesorrevisor,
                id_ptg: id_ptg
            }
        });
        res.status(204).json('El Designa_Revisor fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Designa_Revisor", error: error.message })
    }
}

export const buscarDesigna_Revisor = async (req, res) => {
    const { id_ctg, id_profesorrevisor, id_ptg } = req.body;
    try {
        const buscar = await Designa_Revisor.findOne({
            where: {
                id_ctg: id_ctg,
                id_profesorrevisor:id_profesorrevisor,
                id_ptg: id_ptg
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Designa_Revisor no encontrado");
    }
}