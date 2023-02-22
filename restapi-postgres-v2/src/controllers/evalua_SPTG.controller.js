import { evalua_SPTG } from '../models/evalua_SPTG.js'
export const obtenerevalua_SPTG = async (req,res) => {
    const obtener = await evalua_SPTG.findAll();
    res.json(obtener);
};
export const crearevalua_SPTG = async (req,res) => {
    const { id_sptg, id_administrador } = req.body;
    try {
        const nuevo = await evalua_SPTG.create({
            id_sptg,
            id_administrador
        },
        {
            fields: ["id_sptg","id_administrador"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de evalua_SPTG", error: error.message })
    }
};
export const actualizarevalua_SPTG = async (req,res) => {
   const { id_sptg, id_administrador,fecha_revision } = req.body;
    try {
        const buscar = await evalua_SPTG.findOne({
            where: {
                id_sptg: id_sptg,
                id_administrador: id_administrador
            }
        });

        buscar.fecha_revision = fecha_revision;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "evalua_SPTG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar evalua_SPTG", error: error.message});
    }
}

export const eliminarevalua_SPTG = async (req,res) => {
    const { id_sptg, id_administrador } = req.body;
    try {
        const eliminar = await evalua_SPTG.destroy({
            where: {
                id_sptg: id_sptg,
                id_administrador: id_administrador
            }
        });
        res.status(204).json('El evalua_SPTG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de evalua_SPTG", error: error.message })
    }
}

export const buscarevalua_SPTG = async (req, res) => {
    const { id_sptg, id_administrador } = req.body;
    try {
        const buscar = await evalua_SPTG.findOne({
            where: {
                id_sptg: id_sptg,
                id_administrador: id_administrador
            }
        })
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("evalua_SPTG no encontrado");
    }
}