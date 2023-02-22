import { Empresas } from '../models/Empresas.js'
export const obtenerEmpresas = async (req,res) => {
    const obtener = await Empresas.findAll();
    res.json(obtener);
};
export const crearEmpresas = async (req,res) => {
    const {nombre, rif, direccion, telefono} = req.body;
    try {
        const nuevo = await Empresas.create({
           nombre,
           rif,
           direccion,
           telefono 
        },
        {
            fields: ["nombre", "rif","direccion", "telefono"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Empresa", error: error.message })
    }
};
export const actualizarEmpresas = async (req,res) => {
   const {nombre, rif, direccion, telefono } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Empresas.findByPk(id);

        buscar.nombre = nombre;
        buscar.rif = rif;
        buscar.direccion = direccion;
        buscar.telefono = telefono;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Empresa actualizada correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar empresa", error: error.message});
    }
}

export const eliminarEmpresas = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Empresas.destroy({
            where: {
                id_empresa: id
            }
        });
        res.status(204).json('La empresa fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de ", error: error.message })
    }
}

export const buscarEmpresas = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Empresas.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Empresa no encontrada");
    }
}