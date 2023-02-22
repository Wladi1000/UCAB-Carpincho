import { PTEG } from '../models/PTEG.js'
export const obtenerPTEG = async (req,res) => {
    const obtener = await PTEG.findAll();
    res.json(obtener);
};
export const crearPTEG = async (req,res) => {
    const { id_pteg } = req.body;
    try {
        const nuevo = await PTEG.create({
            id_pteg
        },
        {
            fields: ["id_pteg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PTEG", error: error.message })
    }
};
export const actualizarPTEG = async (req,res) => {
   const { id_pteg } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PTEG.findByPk(id);

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PTEG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PTEG", error: error.message});
    }
}

export const eliminarPTEG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PTEG.destroy({
            where: {
                id_pteg: id
            }
        });
        res.status(204).json('El PTEG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PTEG", error: error.message })
    }
}

export const buscarPTEG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PTEG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PTEG no encontrado");
    }
}