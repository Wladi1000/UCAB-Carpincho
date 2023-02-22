import { PTIG } from '../models/PTIG.js'
export const obtenerPTIG = async (req,res) => {
    const obtener = await PTIG.findAll();
    res.json(obtener);
};
export const crearPTIG = async (req,res) => {
    const { id_ptig } = req.body;
    try {
        const nuevo = await PTIG.create({
            id_ptig
        },
        {
            fields: ["id_ptig"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de PTIG", error: error.message })
    }
};
export const actualizarPTIG = async (req,res) => {
   const { id_ptig } = req.body;
    const id = req.params.id;
    try {
        const buscar = await PTIG.findByPk(id);

        buscar.id_ptig = id_ptig;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PTIG actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar PTIG", error: error.message});
    }
}

export const eliminarPTIG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await PTIG.destroy({
            where: {
                id_ptig: id
            }
        });
        res.status(204).json('El PTIG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de PTIG", error: error.message })
    }
}

export const buscarPTIG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await PTIG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("PTIG no encontrado");
    }
}