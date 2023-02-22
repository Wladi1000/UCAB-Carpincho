import { Criterios_TDGE_J } from '../models/Criterios_TDGE_J.js'
export const obtenerCriterios_TDGE_J = async (req,res) => {
    const obtener = await Criterios_TDGE_J.findAll();
    res.json(obtener);
};
export const crearCriterios_TDGE_J = async (req,res) => {
    const { nombre } = req.body;
    try {
        const nuevo = await Criterios_TDGE_J.create({
           nombre      
        },
        {
            fields: ["nombre"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Criterios_TDGE_J", error: error.message })
    }
};
export const actualizarCriterios_TDGE_J = async (req,res) => {
   const { nombre } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Criterios_TDGE_J.findByPk(id);

        buscar.nombre = nombre;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Criterios_TDGE_J actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Criterios_TDGE_J", error: error.message});
    }
}

export const eliminarCriterios_TDGE_J = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Criterios_TDGE_J.destroy({
            where: {
                id_criterios_tdge_j: id
            }
        });
        res.status(204).json('El Criterios_TDGE_J fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Criterios_TDGE_J", error: error.message })
    }
}

export const buscarCriterios_TDGE_J = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Criterios_TDGE_J.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Criterios_TDGE_J no encontrado");
    }
}