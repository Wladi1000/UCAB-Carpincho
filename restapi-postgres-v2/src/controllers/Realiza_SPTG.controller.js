import {realiza_SPTG} from '../models/realiza_SPTG.js'
export const obtenerrealiza_SPTG = async (req,res) => {
    const obtener = await realiza_SPTG.findAll();
    res.json(obtener);
};
export const crearrealiza_SPTG = async (req,res) => {
    const { id_sptg, id_estudiante } = req.body;
    try {
        const nuevo = await realiza_SPTG.create({
            id_sptg,
            id_estudiante
        },
        {
            fields: ["id_sptg","id_estudiante"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de realiza_SPTG", error: error.message })
    }
};
export const actualizarrealiza_SPTG = async (req,res) => {
   const { id_sptg, id_estudiante } = req.body;
    try {
        const buscar = await realiza_SPTG.findOne({
            where: {
                id_sptg:id_sptg,
                id_estudiante: id_estudiante
            }
        });

        buscar.id_estudiante = id_estudiante
        buscar.id_sptg =id_sptg ;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "realiza_SPTG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar realiza_SPTG", error: error.message});
    }
}

export const eliminarrealiza_SPTG = async (req,res) => {
    const { id_sptg, id_estudiante } = req.body;
    try {
        const eliminar = await realiza_SPTG.destroy({
            where: {
                id_sptg: id_sptg,
                id_estudiante: id_estudiante
            }
        });
        res.status(204).json('El realiza_SPTG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de ", error: error.message })
    }
}

export const buscarrealiza_SPTG = async (req, res) => {
    const { id_sptg, id_estudiante } = req.body;
    try {
        const buscar = await realiza_SPTG.findOne({
            where: {
                id_sptg: id_sptg,
                id_estudiante: id_estudiante
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("realiza_SPTG no encontrado");
    }
}