import {Administradores} from '../models/Administradores.js'
export const obtenerAdministradores = async (req,res) => {
    const administradores = await Administradores.findAll();
    res.json(administradores);
};
export const crearAdministradores = async (req,res) => {
    try {
        const { id_administrador, oficina,cargo,experiencia} = req.body;
        const nuevo = await Administradores.create({
            id_administrador,
            oficina,
            cargo,
            experiencia
        },
        {
            fields: ["id_administrador","oficina","cargo","experiencia"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de administrador", error: error.message })
    }
};
export const actualizarAdministradores = async (req,res) => {
    const {oficina,cargo,experiencia} = req.body;
    const id = req.params.id;
    try {
        const buscar = await Administradores.findByPk(id);

        buscar.oficina = oficina;
        buscar.cargo = cargo;
        buscar.experiencia = experiencia;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Administrador actualizado correctamente", Administrador: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar usuario", error: error.message});
    }
}

export const eliminarAdministradores = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Administradores.destroy({
            where: {
                id_administrador: id
            }
        });
        res.status(204).json('El administrador fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de administrador", error: error.message })
    }
}

export const buscarAdministradores = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Administradores.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Administrador no encontrado");
    }
}