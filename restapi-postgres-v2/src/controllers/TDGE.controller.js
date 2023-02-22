import {TDGE} from '../models/TDGE.js'
export const obtenerTDGE = async (req,res) => {
    const obtener = await TDGE.findAll();
    res.json(obtener);
};
export const crearTDGE = async (req,res) => {
    const { id_tdge } = req.body;
    try {
        const nuevo = await TDGE.create({
            id_tdge
        },
        {
            fields: ["id_tdge"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de TDGE", error: error.message })
    }
};
export const actualizarTDGE = async (req,res) => {
   const { id_tdge, id_pe_final_tdge } = req.body;
    const id = req.params.id;
    try {
        const buscar = await TDGE.findByPk(id);

        buscar.id_tdge = id_tdge;
        buscar.id_pe_final_tdge = id_pe_final_tdge;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "TDGE actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar usuario TDGE", error: error.message});
    }
}

export const eliminarTDGE = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await TDGE.destroy({
            where: {
                id_tdge: id
            }
        });
        res.status(204).json('El TDGE fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de TDGE ", error: error.message })
    }
}

export const buscarTDGE = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await TDGE.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("TDGE no encontrado");
    }
}