import {Profesores} from '../models/Profesores.js'
export const obtenerProfesores = async (req,res) => {
    const obtener = await Profesores.findAll();
    res.json(obtener);
};
export const crearProfesores = async (req,res) => {
    try {
        const { id_usuario } = req.body;
        const nuevoProfesor = await Profesores.create({
            id_profesor: id_usuario
        },
        {
            fields: ["id_profesor"]
        });
        res.json(nuevoProfesor);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de profesor", error: error.message })
    }
};
export const actualizarProfesores = async (req,res) => {
    res.json({mensaje: "Para actualizar profesor, actualicelo en la tabla usuarios"});
}

export const eliminarProfesores= async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Profesores.destroy({
            where: {
                id_profesor: id
            }
        });
        res.status(204).json('El profesor fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de profesor", error: error.message })
    } 
}

export const buscarProfesores = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Profesores.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Profesor no encontrado");
    }
}