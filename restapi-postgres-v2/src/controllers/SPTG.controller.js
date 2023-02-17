import { SPTG } from '../models/SPTG.js'
export const obtenerSPTG= async (req,res) => {
    const obtener = await SPTG.findAll();
    res.json(obtener);
};
export const crearSPTG = async (req,res) => {

};
export const actualizarSPTG = async (req,res) => {
   
}

export const eliminarSPTG = async (req,res) => {

}

export const buscarSPTG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await SPTG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("[SPTG] no encontrado");
    }
}