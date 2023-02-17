import {Administradores} from '../models/Administradores.js'
export const obtenerAdministradores = async (req,res) => {
    const administradores = await Administradores.findAll();
    res.json(administradores);
};
export const crearAdministradores = async (req,res) => {
    try {
        const nuevoProfesor = await Administradores.create();
        res.json(nuevoProfesor);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de administrador", error: error.message })
    }
};
export const actualizarAdministradores = async (req,res) => {
   
}

export const eliminarAdministradores = async (req,res) => {

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