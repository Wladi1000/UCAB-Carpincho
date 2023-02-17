import {Usuarios} from '../models/Usuarios.js'
export const obtenerUsuarios = async (req,res) => {
    const usuarios = await Usuarios.findAll();
    res.json(usuarios);
};
export const crearUsuarios = async (req,res) => {
    const {nombres,apellidos,correo,cedula} = req.body;
    try {
        const nuevoUsuario = await Usuarios.create({
            nombres,
            apellidos,
            correo,
            cedula
        },
        {
            fields: ["nombres","apellidos","correo","cedula"]
        });
        res.json(nuevoUsuario);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de usuario", error: error.message })
    }
    
};
export const actualizarUsuarios = async (req,res) => {
    const {nombres,apellidos,correo,cedula} = req.body;
    const id = req.params.id;
    try {
        const buscar = await Usuarios.findByPk(id);

        buscar.nombres = nombres;
        buscar.apellidos = apellidos;
        buscar.correo = correo;
        buscar.cedula = cedula;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Usuario actualizado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar usuario", error: error.message});
    }
   


}

export const eliminarUsuarios = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Usuarios.destroy({
            where: {
                id_usuario: id
            }
        });
        res.status(204).json('El usuario fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de usuario", error: error.message })
    } 
}

export const buscarUsuarios = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Usuarios.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Usuario no encontrado");
    }
}