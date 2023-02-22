import { Especialidades } from '../models/Especialidades.js'
export const obtenerEspecialidades = async (req,res) => {
    const obtener = await Especialidades.findAll();
    res.json(obtener);
};
export const crearEspecialidades = async (req,res) => {
    const { nombre } = req.body;
    try {
        const nuevo = await Especialidades.create({
            nombre
        },
        {
            fields: ["nombre"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de especialidad", error: error.message })
    }
};
export const actualizarEspecialidades = async (req,res) => {
   const { nombre } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Especialidades.findByPk(id);

        buscar.nombre = nombre;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Especialidad actualizada correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar especialidad", error: error.message});
    }
}

export const eliminarEspecialidades = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Especialidades.destroy({
            where: {
                id_especialidad: id
            }
        });
        res.status(204).json('La especialidad fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de especialidad", error: error.message })
    }
}

export const buscarEspecialidades = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Especialidades.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Especialidad no encontrada");
    }
}