import {Conforma_Jurado_Profesor} from '../models/Conforma_Jurado_Profesor.js'
export const obtenerConforma_Jurado_Profesor = async (req,res) => {
    const obtener = await Conforma_Jurado_Profesor.findAll();
    res.json(obtener);
};
export const crearConforma_Jurado_Profesor = async (req,res) => {
    const { id_jurado, id_profesor} = req.body;
    try {
        const nuevo = await Conforma_Jurado_Profesor.create({
            id_jurado,
            id_profesor
        },
        {
            fields: ["id_jurado","id_profesor"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Conforma_Jurado_Profesor", error: error.message })
    }
};
export const actualizarConforma_Jurado_Profesor = async (req,res) => {
    const { id_jurado, id_profesor} = req.body;
    const id = req.params.id;
    try {
        const buscar = await Conforma_Jurado_Profesor.findOne({
            where: {
                id_jurado: id_jurado,
                id_profesor: id_profesor
            }
        });

        buscar.id_jurado = id_jurado;
        buscar.id_profesor = id_profesor;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Conforma_Jurado_Profesor actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Conforma_Jurado_Profesor", error: error.message});
    }
}

export const eliminarConforma_Jurado_Profesor = async (req,res) => {
    const { id_jurado, id_profesor} = req.body;
    try {
        const eliminar = await Conforma_Jurado_Profesor.destroy({
            where: {
                id_jurado: id_jurado,
                id_profesor: id_profesor
            }
        });
        res.status(204).json('El Conforma_Jurado_Profesor fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Conforma_Jurado_Profesor", error: error.message })
    }
}

export const buscarConforma_Jurado_Profesor = async (req, res) => {
    const { id_jurado, id_profesor} = req.body;
    try {
        const buscar = await Conforma_Jurado_Profesor.findOne({
            where: {
                id_jurado: id_jurado,
                id_profesor: id_profesor
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Conforma_Jurado_Profesor no encontrado");
    }
}