import {Conforma_Jurado_ProfesionalExterno} from '../models/Conforma_Jurado_ProfesionalExterno.js'
export const obtenerConforma_Jurado_ProfesionalExterno = async (req,res) => {
    const obtener = await Conforma_Jurado_ProfesionalExterno.findAll();
    res.json(obtener);
};
export const crearConforma_Jurado_ProfesionalExterno = async (req,res) => {
    const { id_jurado, id_profesionale} = req.body;
    try {
        const nuevo = await Conforma_Jurado_ProfesionalExterno.create({
            id_jurado,
            id_profesionale
        },
        {
            fields: ["id_jurado","id_profesionale"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Conforma_Jurado_ProfesionalExterno", error: error.message })
    }
};
export const actualizarConforma_Jurado_ProfesionalExterno = async (req,res) => {
    const { id_jurado, id_profesionale} = req.body;
    const id = req.params.id;
    try {
        const buscar = await Conforma_Jurado_ProfesionalExterno.findOne({
            where: {
                id_jurado: id_jurado,
                id_profesionale: id_profesionale
            }
        });

        buscar.id_jurado = id_jurado;
        buscar.id_profesionale = id_profesionale;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Conforma_Jurado_ProfesionalExterno actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Conforma_Jurado_ProfesionalExterno", error: error.message});
    }
}

export const eliminarConforma_Jurado_ProfesionalExterno = async (req,res) => {
    const { id_jurado, id_profesionale} = req.body;
    try {
        const eliminar = await Conforma_Jurado_ProfesionalExterno.destroy({
            where: {
                id_jurado: id_jurado,
                id_profesionale: id_profesionale
            }
        });
        res.status(204).json('El Conforma_Jurado_ProfesionalExterno fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Conforma_Jurado_ProfesionalExterno", error: error.message })
    }
}

export const buscarConforma_Jurado_ProfesionalExterno = async (req, res) => {
    const { id_jurado, id_profesionale} = req.body;
    try {
        const buscar = await Conforma_Jurado_ProfesionalExterno.findOne({
            where: {
                id_jurado: id_jurado,
                id_profesionale: id_profesionale
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Conforma_Jurado_ProfesionalExterno no encontrado");
    }
}