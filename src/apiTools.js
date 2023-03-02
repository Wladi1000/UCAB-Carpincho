export const decirHola = () => {
  alert('Hola, buenas noches');
};

export const obtenerSoliciturdes = async () => {
  const resSolicitudes = await fetch("http://localhost:3000/datosEstudiantes");
  const sptg = await resSolicitudes.json();
  return sptg;
};

export const obtenerEmpresas = async () => {
  const resEmpresas = await fetch("http://localhost:3000/Empresas/");
  const empresas = await resEmpresas.json();
  return empresas;
};

export const obtenerIdEstudiante = async (cedulaAlumno) => {
  const res = await fetch(
    "http://localhost:3000/Estudiantes/cedula/" + cedulaAlumno
  );
  const response = await res.json();
  return response;
};

export const obtenerIdTutor = async (cedulaTutor) => {
  const res = await fetch(
    "http://localhost:3000/Profesores/cedula/" + cedulaTutor
  );
  const response = await res.json();
  return response;
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

  data = obtenerSoliciturdes();

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
  const respuesta = await res.json();
  return;
};

export const insertarSolicitudTg = async (planillaSolicitud, data) => {

  const tutor = await obtenerIdTutor(planillaSolicitud.cedulaTutor);
  const estudiante = await obtenerIdEstudiante(planillaSolicitud.cedulaAlumnos[0]);
  console.log(tutor);
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
      fetch("http://localhost:3000/evalua_SPTG/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_sptg: data.id_sptg,
          id_administrador: 1
        }),
      })
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          console.log(data);
      }).catch((error)=>{
        console.log(error)
      } );
      if(planillaSolicitud.trabajoDeGrado.modalidad === 'E'){
        fetch('http://localhost:3000/SPTGE', {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_steg: data.id_sptg,
          }),
        }).then( (response) => {
          return response.json();
        }).then( (data) => {
          console.log(data)
        }).catch( (error) => {
          console.log({mensaje: "Error en la asignación de modalidad", error: error});
        });
      }else if(planillaSolicitud.trabajoDeGrado.modalidad === 'I'){
        fetch('http://localhost:3000/SPTGI', {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_stig: data.id_sptg,
          }),
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
          if(planillaSolicitud.trabajoDeGrado.modalidad === 'E'){
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
              .then( (data) => {
                console.log(data)
              })
          }else{
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
              .then( (data) => {
                  console.log(data)
              })
          }
          fetch("http://localhost:3000/evalua_SPTG/", {
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
            console.log(data);
          });
      });

    })
    .catch((e) => {
      console.log("Error en la inserción de realiza_SPTG");
    });
  const resSolicitudes = await fetch(
    "http://localhost:3000/datosEstudiantes"
  );
  data = obtenerSoliciturdes();
};
