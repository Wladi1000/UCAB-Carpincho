import { Estudiantes } from '../models/Estudiantes.js'
export const obtenerEstudiantes = async (req,res) => {
    const obtener = await Estudiantes.findAll();
    res.json(obtener);
};
export const crearEstudiantes = async (req,res) => {
    const { id_estudiante } = req.body;
    try {
        const nuevo = await Estudiantes.create({
            id_estudiante
        },
        {
            fields: ["id_estudiante"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Estudiantes ", error: error.message })
    }
};
export const actualizarEstudiantes = async (req,res) => {
   const { id_estudiante } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Estudiantes.findByPk(id);

        buscar.id_estudiante = id_estudiante;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Estudiantes actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Estudiantes", error: error.message});
    }
}

export const eliminarEstudiantes = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Estudiantes.destroy({
            where: {
                id_estudiante: id
            }
        });
        res.status(204).json('El Estudiantes fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Estudiantes", error: error.message })
    }
}

export const buscarEstudiantes = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Estudiantes.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Estudiantes no encontrado");
    }
}