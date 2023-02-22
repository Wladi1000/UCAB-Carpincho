import {Especialidad_profesor} from '../models/Especialidad_profesor.js'
export const obtenerEspecialidad_profesor = async (req,res) => {
    const obtener = await Especialidad_profesor.findAll();
    res.json(obtener);
};
export const crearEspecialidad_profesor = async (req,res) => {
    const { id_profesor, id_especialidad, descripcion } = req.body;
    try {
        const nuevo = await Especialidad_profesor.create({
            id_profesor,
            id_especialidad,
            descripcion
        },
        {
            fields: ["id_profesor","id_especialidad","descripcion"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Especialidad_profesor", error: error.message })
    }
};
export const actualizarEspecialidad_profesor = async (req,res) => {
    const { id_profesor, id_especialidad, descripcion } = req.body;
    try {
        const buscar = await Especialidad_profesor.findOne({
            where: {
                id_profesor: id_profesor,
                id_especialidad: id_especialidad
            }
        })

        buscar.id_profesor = id_profesor;
        buscar.id_especialidad = id_especialidad;
        buscar.descripcion = descripcion;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Especialidad_profesor actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Especialidad_profesor", error: error.message});
    }
}

export const eliminarEspecialidad_profesor = async (req,res) => {
    const { id_profesor, id_especialidad } = req.body
    try {
        const eliminar = await Especialidad_profesor.destroy({
            where: {
                id_profesor : id_profesor,
                id_especialidad: id_especialidad
            }
        });
        res.status(204).json('El Especialidad_profesor fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Especialidad_profesor", error: error.message })
    }
}

export const buscarEspecialidad_profesor = async (req, res) => {
    const { id_profesor, id_especialidad } = req.body
    try {
        const buscar = await Especialidad_profesor.findOne({
            where: {
                id_profesor: id_profesor,
                id_especialidad: id_especialidad
            }
        })
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Especialidad_profesor no encontrado");
    }
}