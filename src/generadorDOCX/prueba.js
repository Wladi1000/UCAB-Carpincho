import { generarCartaDesignacionTutorTEG } from './carta_designacion_tutor_teg.js'
import { generarCartaDesignacionTutorTIG } from './carta_designacion_tutor_tig.js'
import { generarCartaDesignacionRevisor } from './carta_designacion_revisor.js'

//Modelo de los datos de la carta de designación para inserción de datos
const Carta_designacion_teg= {
    propuesta: {
        titulo: 'Titulo de tesis de grado 2',
        modalidad: 'E',
        alumnno: [{
            cedula: '27656348',
            nombres: 'Luis Carlos',
            apellidos: 'Somoza Ledezma'
        }],
        tutor: 'Bello Chirinos, Jannelly Josefina'
    },
    fecha_designacion: '29 de Julio del 2023',
    CDE: '005-2022-2023',
    administrador: 'Luz. E Medina'
}
const Carta_designacion_tig = {
    propuesta: {
        titulo: 'Titulo de tesis de grado 2',
        modalidad: 'E',
        alumnno: [{
            cedula: '27656348',
            nombres: 'Luis Carlos',
            apellidos: 'Somoza Ledezma'
        },
        {
            cedula: '27656348',
            nombres: 'Luis Carlos',
            apellidos: 'Somoza Ledezma'
        }],
        tutor: 'Bello Chirinos, Jannelly Josefina',
        tutor_empresarial: {
            nombres: "Luis Noel",
            apellidos: "Somoza Yepez",
            cedula: "11997576"
        }
    },
    fecha_designacion: '29 de Julio del 2023',
    CDE: '005-2022-2023',
    administrador: 'Luz. E Medina',
    empresa: "SomozaCorp"
}
const Carta_designacion_revisor = {
    propuesta: {
        titulo: 'Titulo de propuesta de grado',
        modalidad: 'TEG',
        alumno: [{
            cedula: '27656348',
            nombres: 'Luis Carlos',
            apellidos: 'Somoza Ledezma'
        }],
        tutor: 'Bellos Chirinos, Jannelly Josefina'
    },
    fecha_designacion: '29 de Julio del 2020',
    CDE: '005-2022-2023',
    administrador: 'Luz E. Medina',
    correo_administrador: 'lcmedina.19@ucab.edu.ve',
    modalidad: 'TEG',
    revisor: 'Larez, Jesus'
}
//generarCartaDesignacionTutorTEG(Carta_designacion_teg);
//generarCartaDesignacionTutorTIG(Carta_designacion_tig);
//generarCartaDesignacionRevisor(Carta_designacion_revisor);





