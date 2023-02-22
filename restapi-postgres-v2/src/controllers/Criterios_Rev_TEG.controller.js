import { Criterios_Rev_TEG } from '../models/Criterios_Rev_TEG.js'
export const obtenerCriterios_Rev_TEG = async (req,res) => {
    const obtener = await Criterios_Rev_TEG.findAll();
    res.json(obtener);
};
export const crearCriterios_Rev_TEG = async (req,res) => {
    const { nombre } = req.body;
    try {
        const nuevo = await Criterios_Rev_TEG.create({
           nombre 
        },
        {
            fields: ["nombre"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Criterios_Rev_TEG", error: error.message })
    }
};
export const actualizarCriterios_Rev_TEG = async (req,res) => {
   const { nombre } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Criterios_Rev_TEG.findByPk(id);

        buscar.nombre = nombre;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Criterios_Rev_TEG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Criterios_Rev_TEG", error: error.message});
    }
}

export const eliminarCriterios_Rev_TEG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Criterios_Rev_TEG.destroy({
            where: {
                id_criterios_rev_teg: id
            }
        });
        res.status(204).json('El Criterios_Rev_TEG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Criterios_Rev_TEG", error: error.message })
    }
}

export const buscarCriterios_Rev_TEG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Criterios_Rev_TEG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Criterios_Rev_TEG no encontrado");
    }
}