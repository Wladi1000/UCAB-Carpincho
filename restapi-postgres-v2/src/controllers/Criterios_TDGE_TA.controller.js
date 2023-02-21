import { Criterios_TDGE_TA } from '../models/Criterios_TDGE_TA.js'
export const obtenerCriterios_TDGE_TA = async (req,res) => {
    const obtener = await Criterios_TDGE_TA.findAll();
    res.json(obtener);
};
export const crearCriterios_TDGE_TA = async (req,res) => {
    const { nombre } = req.body;
    try {
        const nuevo = await Criterios_TDGE_TA.create({
           nombre      
        },
        {
            fields: ["nombre"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Criterios_TDGE_TA", error: error.message })
    }
};
export const actualizarCriterios_TDGE_TA = async (req,res) => {
   const { nombre } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Criterios_TDGE_TA.findByPk(id);

        buscar.nombre = nombre;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Criterios_TDGE_TA actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Criterios_TDGE_TA", error: error.message});
    }
}

export const eliminarCriterios_TDGE_TA = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Criterios_TDGE_TA.destroy({
            where: {
                id_criterios_tdge_ta: id
            }
        });
        res.status(204).json('El Criterios_TDGE_TA fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Criterios_TDGE_TA", error: error.message })
    }
}

export const buscarCriterios_TDGE_TA = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Criterios_TDGE_TA.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Criterios_TDGE_TA no encontrado");
    }
}