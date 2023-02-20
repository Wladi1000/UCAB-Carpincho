import { Criterios_TDGI_J } from '../models/Criterios_TDGI_J.js'
export const obtenerCriterios_TDGI_J = async (req,res) => {
    const obtener = await Criterios_TDGI_J.findAll();
    res.json(obtener);
};
export const crearCriterios_TDGI_J = async (req,res) => {
    const { nombre } = req.body;
    try {
        const nuevo = await Criterios_TDGI_J.create({
           nombre
        },
        {
            fields: ["nombre"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Criterios_TDGI_J", error: error.message })
    }
};
export const actualizarCriterios_TDGI_J = async (req,res) => {
   const { nombre } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Criterios_TDGI_J.findByPk(id);

        buscar.nombre = nombre;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Criterios_TDGI_J actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Criterios_TDGI_J", error: error.message});
    }
}

export const eliminarCriterios_TDGI_J = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Criterios_TDGI_J.destroy({
            where: {
                id_criterios_tdgi_j: id
            }
        });
        res.status(204).json('El Criterios_TDGI_J fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Criterios_TDGI_J", error: error.message })
    }
}

export const buscarCriterios_TDGI_J = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Criterios_TDGI_J.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Criterios_TDGI_J no encontrado");
    }
}