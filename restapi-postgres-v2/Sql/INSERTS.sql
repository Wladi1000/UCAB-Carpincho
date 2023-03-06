/*Insertando listado de usuarios*/
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Luz Esperanza', 'Medina', 'lemedina@ucab.edu.ve', '99999999','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Luis Carlos', 'Somoza Ledezma', 'lcsomoza.19@est.ucab.edu.ve', '27656348','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Luis Noel', 'Somoza Ledezma', 'lnsomoza.19@est.ucab.edu.ve', '27656349','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Luis Fernando', 'Somoza Ledezma', 'lfsomoza.19@est.ucab.edu.ve', '27656350','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Franklin', 'Bello', 'fbelloc@ucab.edu.ve', '1','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Wladimir', 'San Vicente', 'wjsanvicente.18@est.ucab.edu.ve', '27301846','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Pedro', 'Perez', 'pperez.07@est.ucab.edu.ve', '2','04249749230','Leyenda');
/*Insertando listado de estudiantes*/
INSERT INTO Estudiantes(id_estudiante) VALUES (1);
INSERT INTO Estudiantes(id_estudiante) VALUES (4);
INSERT INTO Estudiantes(id_estudiante) VALUES (3);
INSERT INTO Estudiantes(id_estudiante) VALUES (6);
INSERT INTO Estudiantes(id_estudiante) VALUES (7);
/*Insertando listado de administradores*/
INSERT INTO Administradores(id_administrador,oficina,cargo,experiencia) VALUES (2, 'Oficina', 'cargo',5);
INSERT INTO Administradores(id_administrador,oficina,cargo,experiencia) VALUES (7, 'Rector', 'cargo',5);
/*Insertando listado de Profesores*/
INSERT INTO Profesores(id_profesor) VALUES (5);
INSERT INTO Profesores(id_profesor) VALUES (7);
/*Insertando listado de Empresas*/
INSERT INTO Empresas(nombre,rif,direccion,telefono) VALUES ('hola','hola','hola','hola');
/*Insertando listado de ProfesionalesE*/
INSERT INTO ProfesionalesExternos(id_profesionale,id_empresa,fecha_aceptacion) VALUES (6,1,'2022-02-21');
INSERT INTO ProfesionalesExternos(id_profesionale,id_empresa,fecha_aceptacion) VALUES (7,1,'2001-01-14');
/*Insertando listado de SPTG*/

/*Insertando listado de CDE*/
INSERT INTO CDE(id_cde) VALUES ('005-2022-2023');
INSERT INTO CDE(id_cde) VALUES ('006-2022-2023');
INSERT INTO CDE(id_cde) VALUES ('007-2022-2023');
INSERT INTO CDE(id_cde) VALUES ('008-2022-2023');
/*Insertando listado de CRITERIOS_REV_TEG*/
INSERT INTO CRITERIOS_REV_TEG(nombre) VALUES ('Criterio de revisor TEG 1');
INSERT INTO CRITERIOS_REV_TEG(nombre) VALUES ('Criterio de revisor TEG 2');
INSERT INTO CRITERIOS_REV_TEG(nombre) VALUES ('Criterio de revisor TEG 3');
INSERT INTO CRITERIOS_REV_TEG(nombre) VALUES ('Criterio de revisor TEG 4');
INSERT INTO CRITERIOS_REV_TEG(nombre) VALUES ('Criterio de revisor TEG 5');
INSERT INTO CRITERIOS_REV_TEG(nombre) VALUES ('Criterio de revisor TEG 6');
/*Insertando listado de CRITERIOS_REV_TIG*/
INSERT INTO CRITERIOS_REV_TIG(nombre) VALUES ('Criterio de revisor TIG 1');
INSERT INTO CRITERIOS_REV_TIG(nombre) VALUES ('Criterio de revisor TIG 2');
INSERT INTO CRITERIOS_REV_TIG(nombre) VALUES ('Criterio de revisor TIG 3');
INSERT INTO CRITERIOS_REV_TIG(nombre) VALUES ('Criterio de revisor TIG 4');
INSERT INTO CRITERIOS_REV_TIG(nombre) VALUES ('Criterio de revisor TIG 5');
INSERT INTO CRITERIOS_REV_TIG(nombre) VALUES ('Criterio de revisor TIG 6');
/*Insertando listado de CRITERIOS_TDGE_J*/
INSERT INTO CRITERIOS_TDGE_J(nombre) VALUES ('Criterio de Jurado TDGE 1');
INSERT INTO CRITERIOS_TDGE_J(nombre) VALUES ('Criterio de Jurado TDGE 2');
INSERT INTO CRITERIOS_TDGE_J(nombre) VALUES ('Criterio de Jurado TDGE 3');
INSERT INTO CRITERIOS_TDGE_J(nombre) VALUES ('Criterio de Jurado TDGE 4');
INSERT INTO CRITERIOS_TDGE_J(nombre) VALUES ('Criterio de Jurado TDGE 5');
INSERT INTO CRITERIOS_TDGE_J(nombre) VALUES ('Criterio de Jurado TDGE 6');
/*Insertando listado de CRITERIOS_TDGE_TA*/
INSERT INTO CRITERIOS_TDGE_TA(nombre) VALUES ('Criterio de Tutor academico TDGE 1');
INSERT INTO CRITERIOS_TDGE_TA(nombre) VALUES ('Criterio de Tutor academico TDGE 2');
INSERT INTO CRITERIOS_TDGE_TA(nombre) VALUES ('Criterio de Tutor academico TDGE 3');
INSERT INTO CRITERIOS_TDGE_TA(nombre) VALUES ('Criterio de Tutor academico TDGE 4');
INSERT INTO CRITERIOS_TDGE_TA(nombre) VALUES ('Criterio de Tutor academico TDGE 5');
INSERT INTO CRITERIOS_TDGE_TA(nombre) VALUES ('Criterio de Tutor academico TDGE 6');
/*Insertando listado de CRITERIOS_TDGI_TA*/
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Jurado TDGI 1');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Jurado TDGI 2');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Jurado TDGI 3');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Jurado TDGI 4');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Jurado TDGI 5');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Jurado TDGI 6');
/*Insertando listado de CRITERIOS_TDGI_TA*/
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Tutor academico TDGI 1');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Tutor academico TDGI 2');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Tutor academico TDGI 3');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Tutor academico TDGI 4');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Tutor academico TDGI 5');
INSERT INTO CRITERIOS_TDGI_TA(nombre) VALUES ('Criterio de Tutor academico TDGI 6');
/*Insertando listado de CRITERIOS_TDGI_TE*/
INSERT INTO CRITERIOS_TDGI_TE(nombre) VALUES ('Criterio de Tutor empresarial TDGI 1');
INSERT INTO CRITERIOS_TDGI_TE(nombre) VALUES ('Criterio de Tutor empresarial TDGI 2');
INSERT INTO CRITERIOS_TDGI_TE(nombre) VALUES ('Criterio de Tutor empresarial TDGI 3');
INSERT INTO CRITERIOS_TDGI_TE(nombre) VALUES ('Criterio de Tutor empresarial TDGI 4');
INSERT INTO CRITERIOS_TDGI_TE(nombre) VALUES ('Criterio de Tutor empresarial TDGI 5');
INSERT INTO CRITERIOS_TDGI_TE(nombre) VALUES ('Criterio de Tutor empresarial TDGI 6');
/*Insertando listado de EMPRESAS*/
INSERT INTO EMPRESAS(nombre,rif,direccion,telefono) VALUES ('Hierro Orinoco','V123456789','Direccion de empresa','04249749230');
INSERT INTO EMPRESAS(nombre,rif,direccion,telefono) VALUES ('Timaca','V123456790','Direccion de empresa','04249749230');
INSERT INTO EMPRESAS(nombre,rif,direccion,telefono) VALUES ('Venalum','V123456791','Direccion de empresa','04249749230');
INSERT INTO EMPRESAS(nombre,rif,direccion,telefono) VALUES ('Corpoelec','V123456792','Direccion de empresa','04249749230');
INSERT INTO EMPRESAS(nombre,rif,direccion,telefono) VALUES ('PDVSA','V1234567893','Direccion de empresa','04249749230');
INSERT INTO EMPRESAS(nombre,rif,direccion,telefono) VALUES ('UCAB Guayana','V123456794','Direccion de empresa','04249749230');
INSERT INTO EMPRESAS(nombre,rif,direccion,telefono) VALUES ('WlaLuchoCorp C.A','V1548469','Direccion de empresa','04147723811');
/*Insertando listado de ESPECIALIDADES*/
INSERT INTO ESPECIALIDADES(nombre) VALUES ('Inteligencia artificial');
INSERT INTO ESPECIALIDADES(nombre) VALUES ('Deep Learning');
INSERT INTO ESPECIALIDADES(nombre) VALUES ('Bases de datos distribuidas');
INSERT INTO ESPECIALIDADES(nombre) VALUES ('Bases de datos no relacionales');
INSERT INTO ESPECIALIDADES(nombre) VALUES ('Arquitectura de software');
INSERT INTO ESPECIALIDADES(nombre) VALUES ('Estandares de codigo');