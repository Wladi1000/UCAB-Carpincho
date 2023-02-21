import {ProfesionalesExternos} from '../models/ProfesionalesExternos.js'
export const obtenerProfesionalesExternos = async (req,res) => {
    const obtener = await ProfesionalesExternos.findAll();
    res.json(obtener);
};
export const crearProfesionalesExternos = async (req,res) => {
    try {
        const { id_profesionale, id_empresa,fecha_aceptacion } = req.body;
        const nuevoProfesor = await ProfesionalesExternos.create({
            id_profesionale,
            id_empresa,
            fecha_aceptacion
        },
        {
            fields: ["id_profesionale","id_empresa","fecha_aceptacion"]
        });
        res.json(nuevoProfesor);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de ProfesionalesExternos", error: error.message })
    }
};
export const actualizarProfesionalesExternos = async (req,res) => {
    const { id_empresa,fecha_aceptacion } = req.body;
    const id = req.params.id;
    try {
        const buscar = await ProfesionalesExternos.findByPk(id);

        buscar.id_empresa =id_empresa ;
        buscar.fecha_aceptacion = fecha_aceptacion;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "ProfesionalesExternos actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar ProfesionalesExternos", error: error.message});
    }
}

export const eliminarProfesionalesExternos = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await ProfesionalesExternos.destroy({
            where: {
                id_profesionale: id
            }
        });
        res.status(204).json('El ProfesionalesExternos fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de ProfesionalesExternos", error: error.message })
    } 
}

export const buscarProfesionalesExternos = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await ProfesionalesExternos.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Profesor no encontrado");
    }
}