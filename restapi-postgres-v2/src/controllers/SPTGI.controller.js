import {SPTGI} from '../models/SPTGI.js'
export const obtenerSPTGI = async (req,res) => {
    const obtener = await SPTGI.findAll();
    res.json(obtener);
};
export const crearSPTGI = async (req,res) => {
    const { id_stig, id_empresa, id_profesionale} = req.body;
    try {
        const nuevo = await SPTGI.create({
            id_stig,
            id_empresa,
            id_profesionale
        },
        {
            fields: ["id_stig","id_empresa","id_profesionale"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de SPTGI ", error: error.message })
    }
};
export const actualizarSPTGI = async (req,res) => {
   const { id_stig, id_empresa, id_profesionale } = req.body;
    const id = req.params.id;
    try {
        const buscar = await SPTGI.findByPk(id);

        buscar.id_stig = id_stig;
        buscar.id_empresa = id_empresa;
        buscar.id_profesionale = id_profesionale;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "SPTGI  actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar SPTGI ", error: error.message});
    }
}

export const eliminarSPTGI  = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await SPTGI.destroy({
            where: {
                id_stig: id
            }
        });
        res.status(204).json('El SPTGI fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de SPTGI", error: error.message })
    }
}

export const buscarSPTGI = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await SPTGI.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("SPTGI no encontrado");
    }
}