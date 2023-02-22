import {SPTGE} from '../models/SPTGE.js'
export const obtenerSPTGE = async (req,res) => {
    const obtener = await SPTGE.findAll();
    res.json(obtener);
};
export const crearSPTGE = async (req,res) => {
    const { id_steg } = req.body;
    try {
        const nuevo = await SPTGE.create({
            id_steg
        },
        {
            fields: ["id_steg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de SPTGE ", error: error.message })
    }
};
export const actualizarSPTGE = async (req,res) => {
   const { id_steg } = req.body;
    const id = req.params.id;
    try {
        const buscar = await SPTGE.findByPk(id);

        buscar.id_steg =id_steg ;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "SPTGE actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar SPTGE", error: error.message});
    }
}

export const eliminarSPTGE = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await SPTGE.destroy({
            where: {
                id_steg: id
            }
        });
        res.status(204).json('El SPTGE fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de SPTGE", error: error.message })
    }
}

export const buscarSPTGE = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await SPTGE.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("SPTGE no encontrado");
    }
}