import { Jurado } from '../models/Jurado.js'
export const obtenerJurado = async (req,res) => {
    const obtener = await Jurado.findAll();
    res.json(obtener);
};
export const crearJurado = async (req,res) => {
    const { id_jurado } = req.body;
    try {
        const nuevo = await Jurado.create({
            id_jurado
        },
        {
            fields: ["id_jurado"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Jurado", error: error.message })
    }
};
export const actualizarJurado = async (req,res) => {
   const { id_jurado, fecha_conformacion } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Jurado.findByPk(id);

        buscar.id_jurado = id_jurado;
        buscar.fecha_conformacion = fecha_conformacion;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Jurado actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Jurado", error: error.message});
    }
}

export const eliminarJurado = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Jurado.destroy({
            where: {
                id_jurado: id
            }
        });
        res.status(204).json('El Jurado fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Jurado", error: error.message })
    }
}

export const buscarJurado = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Jurado.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("[] no encontrado");
    }
}