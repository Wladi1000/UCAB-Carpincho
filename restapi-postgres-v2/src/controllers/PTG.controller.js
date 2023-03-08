import { PTG } from '../models/PTG.js'
import { SPTG } from '../models/SPTG.js';
import { realiza_SPTG } from '../models/realiza_SPTG.js';
import { Estudiantes } from '../models/Estudiantes.js';
import { Usuarios } from '../models/Usuarios.js';
import { Profesores} from '../models/Profesores.js'
import { SPTGI } from '../models/SPTGI.js';
import { Empresas} from '../models/Empresas.js'
import { ProfesionalesExternos } from '../models/ProfesionalesExternos.js';
export const obtenerPTG = async (req,res) => {
    const obtener = await PTG.findAll();
    res.json(obtener);
};
export const crearPTG = async (req,res) => {
    const { id_sptg } = req.body;
    try {
        const nuevo = await PTG.create({
           id_sptg
        },
        {
            fields: ["id_sptg"]
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

export const buscarAlumnos = async (req,res) => {
    const id = req.params.id;
    console.log("id")
    console.log(id)
    const alumnos = await PTG.findAll({
        include: [{
            model: SPTG,
            include: [{
                model: realiza_SPTG,
                include: [{
                    model: Estudiantes,
                    include: [{
                        model: Usuarios
                    }]
                }],
                right: true,
            }
            ],
            right: true,
        }
        ],
        right: true,
        where: {
            id_ptg: id
        }
    })
    console.log(JSON.stringify(alumnos))
    let lista = []
    
    if(alumnos[0] !== undefined){
        lista.push(alumnos[0].dataValues.sptg.dataValues.realiza_sptg.dataValues.estudiante.dataValues.usuario.dataValues)
    }
    if(alumnos[1] !== undefined){
        lista.push(alumnos[0].dataValues.sptg.dataValues.realiza_sptg.dataValues.estudiante.dataValues.usuario.dataValues)
    }
    res.json(lista);
}

export const buscarTutorAcademico = async (req,res) => {
    const id = req.params.id;
    console.log(id);

    const tutor_academico = await SPTG.findOne({
        include: [{
            model: Profesores,
            include: [{
                model: Usuarios,
            }]
        }],
        right: true,
        where: {
            id_sptg: id
        }
    });
    res.json(tutor_academico.profesore.usuario);
}

export const buscarTutorEmpresarial = async (req,res) => {
    const id = req.params.id;
    console.log(id);

    const tutor_empresarial = await SPTG.findOne({
        include: [{
            model: SPTGI,
            include: [{
                model: ProfesionalesExternos,
                include: [{
                    model: Usuarios
                }]
            }]
        }],
        right: true,
        where: {
            id_sptg: id
        }
    });
    res.json(tutor_empresarial.solicitudtig.profesionalesexterno.usuario);
}

export const buscarEmpresaSPTG = async (req,res) => {
    const id = req.params.id;
    console.log(id);

    const empresa = await SPTG.findOne({
        include: [{
            model: SPTGI,
            include: [{
                model: Empresas,
            }]
        }],
        right: true,
        where: {
            id_sptg: id
        }
    });
    res.json(empresa.solicitudtig.empresa);
}

export const rechazarComitePTG = async (req,res) => {

    const id = req.params.id;

    try {
        const buscar = await PTG.findByPk(id);
        buscar.estatus = "R";
        buscar.fecha_entrega = new Date();
        const actualizar = await buscar.save();

        const sptg = await SPTG.findByPk(buscar.id_sptg)
        sptg.estatus = "R";
        const actualizarSPTG = await sptg.save();
        
        res.json( { mensaje: "PTG rechazado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al rechazar PTG", error: error.message});
    }

}

export const rechazarCDEPTG = async (req,res) => {

    const id = req.params.id;

    try {
        const buscar = await PTG.findByPk(id);
        buscar.estatus = "R";
        const actualizar = await buscar.save();

        const sptg = await SPTG.findByPk(buscar.id_sptg)
        sptg.estatus = "R";
        const actualizarSPTG = await sptg.save();
        
        res.json( { mensaje: "PTG rechazado correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al rechazar PTG", error: error.message});
    }

}

export const aprobarComitePTG = async (req,res) => {

    const id = req.params.id;

    try {
        const buscar = await PTG.findByPk(id);
        buscar.estatus = "PR";
        const actualizar = await buscar.save();

        const sptg = await SPTG.findByPk(buscar.id_sptg)
        sptg.estatus = "A";
        const actualizarSPTG = await sptg.save();
        
        res.json( { mensaje: "PTG aprobada correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al aprobada PTG", error: error.message});
    }

}

export const aprobarCDEPTG = async (req,res) => {

    const id = req.params.id;

    try {
        const buscar = await PTG.findByPk(id);
        buscar.estatus = "A";
        const actualizar = await buscar.save();
        
        res.json( { mensaje: "PTG aprobada correctamente", usuario: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al aprobada PTG", error: error.message});
    }

}