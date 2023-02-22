import {TDGI} from '../models/TDGI.js'
export const obtenerTDGI = async (req,res) => {
    const obtener = await TDGI.findAll();
    res.json(obtener);
};
export const crearTDGI = async (req,res) => {
    const { id_tdgi } = req.body;
    try {
        const nuevo = await TDGI.create({
            id_tdgi
        },
        {
            fields: ["id_tdgi"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de TDGI", error: error.message })
    }
};
export const actualizarTDGI = async (req,res) => {
   const { id_tdgi, id_pe_final_tdgi } = req.body;
    const id = req.params.id;
    try {
        const buscar = await TDGI.findByPk(id);

        buscar.id_tdgi = id_tdgi;
        buscar.id_pe_final_tdgi = id_pe_final_tdgi;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "TDGI actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar usuario TDGI", error: error.message});
    }
}

export const eliminarTDGI = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await TDGI.destroy({
            where: {
                id_tdgi: id
            }
        });
        res.status(204).json('El TDGI fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de TDGI ", error: error.message })
    }
}

export const buscarTDGI = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await TDGI.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("TDGI no encontrado");
    }
}