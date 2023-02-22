import { Criterios_Rev_TIG } from '../models/Criterios_Rev_TIG.js'
export const obtenerCriterios_Rev_TIG = async (req,res) => {
    const obtener = await Criterios_Rev_TIG.findAll();
    res.json(obtener);
};
export const crearCriterios_Rev_TIG = async (req,res) => {
    const { nombre } = req.body;
    try {
        const nuevo = await Criterios_Rev_TIG.create({
           nombre 
        },
        {
            fields: ["nombre"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Criterios_Rev_TIG", error: error.message })
    }
};
export const actualizarCriterios_Rev_TIG = async (req,res) => {
   const { nombre } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Criterios_Rev_TIG.findByPk(id);

        buscar.nombre = nombre;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Criterios_Rev_TIG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Criterios_Rev_TIG", error: error.message});
    }
}

export const eliminarCriterios_Rev_TIG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Criterios_Rev_TIG.destroy({
            where: {
                id_criterios_rev_tig: id
            }
        });
        res.status(204).json('El Criterios_Rev_TIG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Criterios_Rev_TIG", error: error.message })
    }
}

export const buscarCriterios_Rev_TIG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Criterios_Rev_TIG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("[] no encontrado");
    }
}