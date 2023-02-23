import { TDG } from '../models/TDG.js'
export const obtenerTDG = async (req,res) => {
    const obtener = await TDG.findAll();
    res.json(obtener);
};
export const crearTDG = async (req,res) => {
    const { id_tdg, id_ptg } = req.body;
    try {
        const nuevo = await TDG.create({
            id_tdg,
            id_ptg
        },
        {
            fields: ["id_tdg","id_ptg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de TDG", error: error.message })
    }
};
export const actualizarTDG = async (req,res) => {
   const { id_tdg, fecha_entrega, hora_presentacion, estatus, id_ptg } = req.body;
    const id = req.params.id;
    try {
        const buscar = await TDG.findByPk(id);

        buscar.id_tdg = id_tdg;
        buscar.fecha_entrega = fecha_entrega;
        buscar.hora_presentacion = hora_presentacion;
        buscar.estatus = estatus;
        buscar.id_ptg = id_ptg;
        
        const actualizar = await buscar.save();
        
        res.json( { mensaje: "TDG actualizado correctamente", Trabajo_de_grado: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar TDG", error: error.message});
    }
}

export const eliminarTDG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await TDG.destroy({
            where: {
                id_tdg: id
            }
        });
        res.status(204).json('El TDG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de TDG", error: error.message })
    }
}

export const buscarTDG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await TDG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("TDG no encontrado");
    }
}