import { Conforma_Consejo } from '../models/Conforma_consejo.js'
export const obtenerConforma_Consejo = async (req,res) => {
    const obtener = await Conforma_Consejo.findAll();
    res.json(obtener);
};
export const crearConforma_Consejo = async (req,res) => {
    const { id_cde, id_profesor } = req.body;
    try {
        const nuevo = await Conforma_Consejo.create({
            id_cde,
            id_profesor
        },
        {
            fields: ["id_cde","id_profesor"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Conforma_Consejo", error: error.message })
    }
};
export const actualizarConforma_Consejo = async (req,res) => {
   const { id_cde, id_profesor } = req.body;
    try {
        const buscar = await Conforma_Consejo.findOne({
            where: {
                id_cde: id_cde,
                id_profesor: id_profesor
            }
        })

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Conforma_Consejo actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Conforma_Consejo", error: error.message});
    }
}

export const eliminarConforma_Consejo = async (req,res) => {
    const { id_cde, id_profesor } = req.body;
    try {
        const eliminar = await Conforma_Consejo.destroy({
            where: {
                id_cde: id_cde,
                id_profesor: id_profesor
            }
        });
        res.status(204).json('El Conforma_Consejo fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Conforma_Consejo", error: error.message })
    }
}

export const buscarConforma_Consejo = async (req, res) => {
    const { id_cde, id_profesor } = req.body;
    try {
        const buscar = await Conforma_Consejo.findOne({
            id_cde,
            id_profesor
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Conforma_Consejo no encontrado");
    }
}