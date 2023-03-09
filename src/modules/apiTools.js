export const decirHola = () => {
  alert('Hola, buenas noches');
};

export const obtenerSolicitudes = async () => {
  const resSolicitudes = await fetch("http://localhost:3000/datosEstudiantes");
  const sptg = await resSolicitudes.json();
  return sptg;
};

export const obtenerSolicitudById = async (solicitudId) => {
  const resSolicitud = await fetch("http://localhost:3000/SPTG/" + solicitudId);
  const solicitud = await resSolicitud.json();
  return solicitud;
};

export const obtenerProfesores = async () => {
  const resSolicitudes = await fetch("http://localhost:3000/datosprofesores");
  const sptg = await resSolicitudes.json();
  return sptg;
};

export const obtenerProfesorById = async (idProfesor) => {
  const resProfesor = await fetch("http://localhost:3000/Profesores/"+idProfesor);
  const profesor = await resProfesor.json();
  return profesor;
};

export const obtenerEmpresas = async () => {
  const resEmpresas = await fetch("http://localhost:3000/Empresas/");
  const empresas = await resEmpresas.json();
  return empresas;
};

export const obtenerEmpresaById = async (idEmpresa) => {
  const resEmpresa = await fetch(`http://localhost:3000/Empresas/${idEmpresa}`);
  const empresa = await resEmpresa.json();
  return empresa;
};

export const obtenerIdEstudiante = async (cedulaEstudiante) => {
  const res = await fetch(
    "http://localhost:3000/Estudiantes/cedula/" + cedulaEstudiante
  );
  const response = await res.json();
  return response;
};

export const obtenerIdTutorAcademico = async (cedulaTutor) => {
  const res = await fetch(
    "http://localhost:3000/Profesores/cedula/" + cedulaTutor
  );
  const response = await res.json();
  return response;
};

export const obtenerIdTutorEmpresarialByCedula = async (cedulaTutorEmpresarial) => {
  const res = await fetch(
    "http://localhost:3000/BuscarProfesional/" + cedulaTutorEmpresarial
  );
  const response = await res.json();
  console.log(response);
  return response;
};

export const obtenerProfesionalesExternos = async () => {
  const resProfesionalesExternos = await fetch("http://localhost:3000/Profesionalesexternos/");
  const profesionales = await resProfesionalesExternos.json();
  return profesionales;
};

export const obtenerProfesionalExternoById = async (idProfesionalExterno) => {
  const resProfesionalesExternos = await fetch(`http://localhost:3000/Profesionalesexternos/${idProfesionalExterno}`);
  const profesionales = await resProfesionalesExternos.json();
  return profesionales;
};

export const actualizarPlanilla = async (planilla) => {
  const res = await fetch("http://localhost:3000/SPTG/" + planilla.id_sptg, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: planilla.titulo,
      modalidad: planilla.modalidad,
      fechaenvio: planilla.fechaenvio,
      id_ta: planilla.id_ta,
      id_admin_evaluador: planilla.id_admin_evaluador,
    }),
  });
  const actualizacion = await res.json();

  planilla.estatus = "";
  planilla.fechaenvio = "";
  planilla.id_admin_evaluador = "";
  planilla.id_sptg = "";
  planilla.id_ta = "";
  planilla.modalidad = "";
  planilla.titulo = "";
  return;
};

export const eliminarPlanilla = async (idPlanilla) => {
  const res = await fetch("http://localhost:3000/SPTG/" + idPlanilla, {
    method: "DELETE",
  });
};

export const obtenerPropuestas = async () => {
  const resSolicitudes = await fetch("http://localhost:3000/PTG");
  const sptg = await resSolicitudes.json();
  return sptg;
};

export const obtenerPropuestaById = async (idPropuesta) => {
  const resPropuesta = await fetch("http://localhost:3000/PTG/"+idPropuesta);
  const ptg = await resPropuesta.json();
  const resSolicitud = await obtenerSolicitudById(ptg.id_sptg);
  const resAlumnos = await fetch('http://localhost:3000/buscarAlumnos/'+ ptg.id_ptg);
  const alumnosSolicitud = await resAlumnos.json();
  const resTutorAcademico = await obtenerProfesorById(resSolicitud.id_ta);
  
  const propuestaFormulario = {
    id_propuesta: ptg.id_ptg,
    id_solicitud: ptg.id_sptg,
    titulo: resSolicitud.titulo,
    fecha: resSolicitud.fechaenvio,
    modalidad: resSolicitud.modalidad,
    alumnos: alumnosSolicitud,
    tutor_academico: resTutorAcademico,
    estatus: ptg.estatus,
    comite_evaluador:{
      id: '',
      descripcion_evaluacion: ''
    },
    id_profesor_revisor: ptg.id_profesor_revisor
  }
  return propuestaFormulario;
};

export const aprobarPropuestaComite = async ( idPropuesta, idComite ) => {
  const resAprobarPropuesta = await fetch( "http://localhost:3000/aprobarComitePTG/" + idPropuesta );
  const aprobarPropuesta = await resAprobarPropuesta.json();

  const aprobado = await fetch( "http://localhost:3000/Aprueba_Comite/",{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_ctg: idComite,
        id_ptg: idPropuesta,
        estatus: "A"
      })
  });

  const respuesta_aprobado = await aprobado.json();

  return;
};

export const designarRevisor = async ( idPropuesta, idRevisor ) => {
  const resDesignarRevisor = await fetch('http://localhost:3000/asignarRevisor/'+idPropuesta,{
    method: 'PUT',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_profesor_revisor: idRevisor
    })
  });
  const designarRevisor = await resDesignarRevisor.json();
  console.log(designarRevisor);
  return alert('Tutor designado desde la api');
};

export const aprobarPropuestaRevisor = async ( idPropuesta ) => {
  const resAprobarPropuesta = await fetch( "http://localhost:3000/PTG/aprobarRevisor/" + idPropuesta );
  const aprobarPropuesta = await resAprobarPropuesta.json();
  
  console.log(aprobarPropuesta);

  return alert(aprobarPropuesta);
};

export const rechazarPropuestaRevisor = async ( idPropuesta ) => {
  const resReprobarPropuesta = await fetch( "http://localhost:3000/PTG/rechazarRevisor/" + idPropuesta );
  const reprobarPropuesta = await resReprobarPropuesta.json();

  console.log(reprobarPropuesta);

  return alert(reprobarPropuesta);
};

export const rechazarPropuesta = async ( idPropuesta, idComite ) => {
  const resRechazoPropuesta = await fetch( "http://localhost:3000/rechazarComitePTG/" + idPropuesta );
  const rechazoPropuesta = await resRechazoPropuesta.json();

  const rechazo = await fetch( "http://localhost:3000/Aprueba_Comite/",{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_ctg: idComite,
        id_ptg: idPropuesta,
        estatus: "R"
      })
  });

  const respuesta_rechazo = await rechazo.json();
  console.log(respuesta_rechazo)

  return alert(rechazoPropuesta);
};

export const obtenerComites = async () => {
  const resComite = await fetch( "http://localhost:3000/CTG/");
  const Comite = await resComite.json();
  return Comite
};

export const obtenerComiteById = async ( idComite ) => {
  const resComite = await fetch( "http://localhost:3000/CTG/" + idComite );
  const comite = await resComite.json();
  return comite;
};

export const obtenerPropuestaSinRevisor = async () => {
  const resPropuestasSinRevisor = await fetch( "http://localhost:3000/PTG/estatus/PR" );
  const propuestasSinRevisor = await resPropuestasSinRevisor.json();
  return propuestasSinRevisor;
};
export const obtenerPropuestaConRevisorAsignado = async () => {
  const resPropuestasConRevisorAsignado = await fetch( "http://localhost:3000/PTG/estatus/PR/Asignado" );
  const propuestasConRevisorAsignado = await resPropuestasConRevisorAsignado.json();
  return propuestasConRevisorAsignado;
};

export const insertarSolicitudTg = async (planillaSolicitud, data) => {
  const tutor = await obtenerIdTutorAcademico(planillaSolicitud.tutor.cedula);
  const estudiante = await obtenerIdEstudiante(planillaSolicitud.alumnos[0].cedula);
  console.log(tutor);
  console.log(estudiante);
  fetch("http://localhost:3000/SPTG/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      modalidad: planillaSolicitud.trabajoDeGrado.modalidad,
      id_ta: tutor.id_usuario,
      titulo: planillaSolicitud.trabajoDeGrado.tituloTG,
      id_admin_evaluador: null,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.id_sptg);
      console.log(planillaSolicitud.trabajoDeGrado.modalidad)

      if (planillaSolicitud.trabajoDeGrado.modalidad === 'E') {
        fetch('http://localhost:3000/SPTGE', {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_steg: data.id_sptg,
          }),
        }).then((response) => {
          return response.json();
        }).then((data) => {
          console.log(data)
        }).catch((error) => {
          console.log({ mensaje: "Error en la asignación de modalidad", error: error });
        });
      } else if (planillaSolicitud.trabajoDeGrado.modalidad === 'I') {
        let profesionalExterno;
        obtenerIdTutorEmpresarialByCedula(planillaSolicitud.tutorEmpresarial.cedula)
        .then( (response) => {
            fetch('http://localhost:3000/SPTGI', {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id_stig: data.id_sptg,
                    id_empresa: planillaSolicitud.empresa.idEmpresa,
                    id_profesionale: response.id_profesionale
                  }),
              }).then((response) => {
                return response.json()
              }).then((data) => {
                console.log(data)
              }).catch((e) => { console.log(e) })
        })


      }

      fetch("http://localhost:3000/realiza_SPTG/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_sptg: data.id_sptg,
          id_estudiante: estudiante.id_usuario,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        }).catch( (e) => {

          console.log(e)
        });


      //Se crea la propuesta de trabajo de grado
      fetch("http://localhost:3000/PTG/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_sptg: data.id_sptg,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (planillaSolicitud.trabajoDeGrado.modalidad === 'E') {

            fetch("http://localhost:3000/PTEG/", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id_pteg: data.id_ptg,
              }),
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data)
              })
          } else {
            fetch("http://localhost:3000/PTIG/", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id_ptig: data.id_ptg,
              }),
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data)
              }).catch( (e) => {
                console.log(e)
              } )
          }
        });

    })
    .catch((e) => {
      console.log(e);
    });
  const resSolicitudes = await fetch(
    "http://localhost:3000/datosEstudiantes"
  ); 
};