import { PTG } from '../models/PTG.js'
export const obtenerPTG = async (req,res) => {
    const obtener = await PTG.findAll();
    res.json(obtener);
};
export const crearPTG = async (req,res) => {
    const { id_ptg, id_sptg } = req.body;
    try {
        const nuevo = await PTG.create({
           id_ptg,
           id_sptg
        },
        {
            fields: ["id_ptg", "id_sptg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PTG", error: error.message })
    }
};
export const actualizarPTG = async (req,res) => {
   const { id_ptg, fecha_entrega, estatus, id_sptg } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PTG.findByPk(id);

        buscar.id_ptg = id_ptg;
        buscar.fecha_entrega = fecha_entrega;
        buscar.estatus = estatus;
        buscar.id_sptg = id_sptg;


        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PTG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PTG", error: error.message});
    }
}

export const eliminarPTG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PTG.destroy({
            where: {
                id_ptg: id
            }
        });
        res.status(204).json('El PTG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PTG", error: error.message })
    }
}

export const buscarPTG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PTG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PTG no encontrado");
    }
}