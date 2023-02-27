--Códigos de borrado de tablas

DROP TABLE IF EXISTS Contiene_Criterios_TDGI_J;
DROP TABLE IF EXISTS Contiene_Criterios_TDGI_TA;
DROP TABLE IF EXISTS Contiene_Criterios_TDGI_TE;
DROP TABLE IF EXISTS Contiene_Criterios_TDGE_J;
DROP TABLE IF EXISTS Contiene_Criterios_TDGE_TE;
DROP TABLE IF EXISTS Contiene_Criterios_TDGE_TA;

DROP TABLE IF EXISTS PE_Contiene_CTIG;
DROP TABLE IF EXISTS PE_Contiene_CTEG;

DROP TABLE IF EXISTS Criterios_Rev_TIG;
DROP TABLE IF EXISTS Criterios_Rev_TEG;

DROP TABLE IF EXISTS Contiene_PE_J_TDGE;
DROP TABLE IF EXISTS Contiene_PE_J_TDGI;
DROP TABLE IF EXISTS Contiene_PE_TE_TDGE;
DROP TABLE IF EXISTS Contiene_PE_TE_TDGI;

DROP TABLE IF EXISTS Designa_TA;

DROP TABLE IF EXISTS TDG;
DROP TABLE IF EXISTS TDGE;
DROP TABLE IF EXISTS TDGI;

DROP TABLE IF EXISTS PE_final_TDGE;
DROP TABLE IF EXISTS PE_final_TDGI;

DROP TABLE IF EXISTS PE_TA_TDGI;
DROP TABLE IF EXISTS PE_TE_TDGI;
DROP TABLE IF EXISTS PE_J_TDGI;


DROP TABLE IF EXISTS Conforma_Jurado_Profesor;
DROP TABLE IF EXISTS Conforma_Jurado_ProfesionalExterno;

DROP TABLE IF EXISTS PE_TA_TDGE;
DROP TABLE IF EXISTS PE_J_TDGE;

---

DROP TABLE IF EXISTS PE_REVISOR_PTEG;
DROP TABLE IF EXISTS PE_REVISOR_PTIG;

DROP TABLE IF EXISTS Designa_Revisor;

DROP TABLE IF EXISTS Aprueba_Consejo;
DROP TABLE IF EXISTS Aprueba_Comite;

DROP TABLE IF EXISTS PTIG;
DROP TABLE IF EXISTS PTEG;

DROP TABLE IF EXISTS realiza_SPTG;
DROP TABLE IF EXISTS evalua_SPTG;

DROP TABLE IF EXISTS PTG;

DROP TABLE IF EXISTS SolicitudTEG;
DROP TABLE IF EXISTS SolicitudTIG;
DROP TABLE IF EXISTS SPTG;

DROP TABLE IF EXISTS Especialidad_profesor;
DROP TABLE IF EXISTS Conforma_Consejo;

DROP TABLE IF EXISTS Administradores;
DROP TABLE IF EXISTS Profesores;
DROP TABLE IF EXISTS Estudiantes;
DROP TABLE IF EXISTS ProfesionalesExternos;

DROP TABLE IF EXISTS Criterios_TDGE_TA;
DROP TABLE IF EXISTS Criterios_TDGE_J;
DROP TABLE IF EXISTS Criterios_TDGI_TA;
DROP TABLE IF EXISTS Criterios_TDGI_J;
DROP TABLE IF EXISTS Criterios_TDGI_TE;

DROP TABLE IF EXISTS Conforma_Jurado_Profesor; 
DROP TABLE IF EXISTS Conforma_Jurado_ProfesionalExterno; 
DROP TABLE IF EXISTS Jurado;

DROP TABLE IF EXISTS Usuarios;
DROP TABLE IF EXISTS Especialidades;
DROP TABLE IF EXISTS Empresas;
DROP TABLE IF EXISTS CDE;
DROP TABLE IF EXISTS CTG;

DROP DOMAIN IF EXISTS NAME_DOMAIN;
--Código para definición de dominios
CREATE DOMAIN NAME_DOMAIN AS VARCHAR(100);
/*************************************************/
CREATE TABLE IF NOT EXISTS Usuarios (
	id_usuario SERIAL,
	nombres NAME_DOMAIN NOT NULL,
	apellidos NAME_DOMAIN NOT NULL,
	correo VARCHAR(250) NOT NULL,
	cedula VARCHAR(10) NOT NULL,
	telefono CHAR(14) NOT NULL,
	contrasena VARCHAR(200) NOT NULL,
	PRIMARY KEY (id_usuario),
	UNIQUE (cedula),
	UNIQUE (correo)
);
ALTER TABLE Usuarios DROP CONSTRAINT regex_contrasena 

CREATE TABLE IF NOT EXISTS Empresas (
	id_empresa SERIAL,
	nombre NAME_DOMAIN NOT NULL,
	rif TEXT NOT NULL,
	direccion TEXT,
	telefono VARCHAR (15) NOT NULL,
	PRIMARY KEY (id_empresa),
	UNIQUE (rif)
);
/*************************************************/
CREATE TABLE IF NOT EXISTS CDE (
	id_CDE VARCHAR(13) NOT NULL,
	fecha_conformacion DATE NOT NULL DEFAULT CURRENT_DATE,
	PRIMARY KEY (id_CDE)
);
/*************************************************/
CREATE TABLE IF NOT EXISTS Especialidades (
	id_especialidad SERIAL,
	nombre NAME_DOMAIN NOT NULL,
	PRIMARY KEY (id_especialidad)
);
/*************************************************/
CREATE TABLE IF NOT EXISTS CTG (
	id_CTG TEXT NOT NULL,
	fecha_conformacion DATE NOT NULL DEFAULT CURRENT_DATE,
	PRIMARY KEY (id_CTG)
);
/************************************************/
CREATE TABLE IF NOT EXISTS PE_J_TDGI (
	id_PE_J_TDGI SERIAL,
	estatus CHAR(2) NOT NULL DEFAULT 'PG',
	nota_final INTEGER DEFAULT NULL,
	PRIMARY KEY (id_PE_J_TDGI)
);

/*Una PE_J_TDGI puede tener los siguientes estatus
	PG: Planilla generada y lista para imprimir, no contiene datos
	PI: Planilla impresa, la planilla fue impresa para enviar a jurado
	PR: Planilla revisada, y con datos del jurado cargados en el sistema
*/
ALTER TABLE PE_J_TDGI
ADD CONSTRAINT estatus_constraint
CHECK (estatus IN ('PG', 'PI','PR'));
/************************************************/

CREATE TABLE Criterios_Rev_TIG (
	id_Criterios_Rev_TIG SERIAL,
	nombre TEXT NOT NULL,
	PRIMARY KEY (id_Criterios_Rev_TIG)
);

CREATE TABLE Criterios_Rev_TEG (
	id_Criterios_Rev_TEG SERIAL,
	nombre TEXT NOT NULL,
	PRIMARY KEY (id_Criterios_Rev_TEG)
);

CREATE TABLE IF NOT EXISTS Criterios_TDGE_J (
	id_Criterios_TDGE_J SERIAL,
	nombre TEXT NOT NULL,
	PRIMARY KEY (id_Criterios_TDGE_J)
);

CREATE TABLE IF NOT EXISTS Criterios_TDGE_TA (
	id_Criterios_TDGE_TA SERIAL,
	nombre TEXT NOT NULL,
	PRIMARY KEY (id_Criterios_TDGE_TA)
);

CREATE TABLE IF NOT EXISTS Criterios_TDGE_J (
	Criterios_TDGE_J SERIAL,
	nombre TEXT NOT NULL,
	PRIMARY KEY (Criterios_TDGE_J)
);
CREATE TABLE IF NOT EXISTS Criterios_TDGI_TA (
	id_Criterios_TDGI_TA SERIAL,
	nombre TEXT NOT NULL,
	PRIMARY KEY (id_Criterios_TDGI_TA)
);

CREATE TABLE IF NOT EXISTS Criterios_TDGI_J (
	id_Criterios_TDGI_J SERIAL,
	nombre TEXT NOT NULL,
	PRIMARY KEY (id_Criterios_TDGI_J)
);
CREATE TABLE IF NOT EXISTS Criterios_TDGI_TE (
	id_Criterios_TDGI_TE SERIAL,
	nombre TEXT NOT NULL,
	PRIMARY KEY (id_Criterios_TDGI_TE)
);
/************************************************/
CREATE TABLE IF NOT EXISTS PE_TA_TDGE (
	id_PE_TA_TDGE SERIAL,
	estatus CHAR(2) NOT NULL DEFAULT 'PG',
	nota_final INTEGER DEFAULT NULL,
	PRIMARY KEY (id_PE_TA_TDGE)
);
/*Una PE_TA_TDGE puede tener los siguientes estatus
	PG: Planilla generada y lista para imprimir, no contiene datos
	PI: Planilla impresa, la planilla fue impresa para enviar a jurado
	PR: Planilla revisada, y con datos del jurado cargados en el sistema
*/
ALTER TABLE PE_TA_TDGE
ADD CONSTRAINT estatus_constraint
CHECK (estatus IN ('PG', 'PI','PR'));
/************************************************/
CREATE TABLE IF NOT EXISTS PE_TE_TDGI (
	id_PE_TE_TDGI SERIAL,
	estatus CHAR(2) NOT NULL DEFAULT 'PG',
	nota_final INTEGER DEFAULT NULL, 
	PRIMARY KEY (id_PE_TE_TDGI)
);
ALTER TABLE PE_TE_TDGI
ADD CONSTRAINT estatus_constraint
CHECK (estatus IN ('PG', 'PI','PR'));
/************************************************/
CREATE TABLE IF NOT EXISTS PE_J_TDGE (
	id_PE_J_TDGE SERIAL,
	estatus CHAR(2) NOT NULL DEFAULT 'PG',
	nota_final INTEGER DEFAULT NULL,
	PRIMARY KEY (id_PE_J_TDGE)
);
ALTER TABLE PE_J_TDGE
ADD CONSTRAINT estatus_constraint
CHECK (estatus IN ('PG', 'PI','PR'));
/************************************************/
---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS Profesores (
	id_profesor INT NOT NULL,
	PRIMARY KEY (id_profesor),
	FOREIGN KEY (id_profesor) REFERENCES Usuarios(id_usuario)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
);

CREATE TABLE IF NOT EXISTS Administradores (
	id_administrador INTEGER NOT NULL,
	oficina TEXT,
	cargo TEXT,
	experiencia INT,
	PRIMARY KEY (id_administrador),
	FOREIGN KEY (id_administrador) REFERENCES Usuarios(id_usuario)
		ON DELETE RESTRICT
		ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS Estudiantes (
	id_estudiante INT NOT NULL,
	PRIMARY KEY (id_estudiante),
	FOREIGN KEY (id_estudiante) REFERENCES Usuarios(id_usuario)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
);

CREATE TABLE IF NOT EXISTS ProfesionalesExternos (
	id_profesionalE INT NOT NULL,
	id_empresa INT NOT NULL,
	fecha_aceptacion DATE NOT NULL,
	PRIMARY KEY (id_profesionalE),
	FOREIGN KEY (id_empresa) REFERENCES Empresas(id_empresa)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
-----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS Jurado (
	id_jurado TEXT NOT NULL,
	fecha_conformacion DATE NOT NULL DEFAULT CURRENT_DATE,
	PRIMARY KEY (id_jurado)
);

CREATE TABLE IF NOT EXISTS Conforma_Jurado_Profesor(
	id_jurado TEXT NOT NULL,
	id_profesor INTEGER NOT NULL,
	PRIMARY KEY (id_jurado,id_profesor),
	FOREIGN KEY (id_jurado) REFERENCES Jurado(id_jurado)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_profesor) REFERENCES Profesores(id_profesor)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
CREATE TABLE IF NOT EXISTS Conforma_Jurado_ProfesionalExterno(
	id_jurado TEXT NOT NULL,
	id_profesionalE INTEGER NOT NULL,
	PRIMARY KEY (id_jurado,id_profesionalE),
	FOREIGN KEY (id_jurado) REFERENCES Jurado(id_jurado)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_profesionalE) REFERENCES ProfesionalesExternos(id_profesionalE)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
CREATE TABLE IF NOT EXISTS PE_TA_TDGI (
	id_PE_TA_TDGI SERIAL,
	estatus CHAR(2) NOT NULL DEFAULT 'PG',
	nota_final INTEGER DEFAULT NULL,
	id_PE_TE_TDGI INTEGER NOT NULL,
	PRIMARY KEY (id_PE_TA_TDGI),
	FOREIGN KEY (id_PE_TE_TDGI) REFERENCES PE_TE_TDGI(id_PE_TE_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
ALTER TABLE PE_TA_TDGI
ADD CONSTRAINT estatus_constraint
CHECK (estatus IN ('PG', 'PI','PR'));
/************************************************/
CREATE TABLE IF NOT EXISTS PE_final_TDGI (
	id_PE_Final_TDGI SERIAL NOT NULL,
	estatus CHAR(2) NOT NULL DEFAULT 'PG',
	tipo_mencion CHAR(1) DEFAULT 'N',
	razon_mencion TEXT DEFAULT NULL,
	nota_final INTEGER DEFAULT NULL,
	id_PE_TA_TDGI INTEGER DEFAULT NULL,
	PRIMARY KEY (id_PE_Final_TDGI),
	FOREIGN KEY (id_PE_TA_TDGI) REFERENCES PE_TA_TDGI(id_PE_TA_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
ALTER TABLE PE_final_TDGI
ADD CONSTRAINT estatus_constraint
CHECK (estatus IN ('PG', 'PI','PR'));
/************************************************/
CREATE TABLE IF NOT EXISTS Contiene_PE_J_TDGI (
	id_PE_Final_TDGI INTEGER NOT NULL,
	id_PE_J_TDGI INTEGER NOT NULL,
	PRIMARY KEY (id_PE_final_TDGI,id_PE_J_TDGI),
	FOREIGN KEY (id_PE_final_TDGI) REFERENCES PE_Final_TDGI(id_PE_Final_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_PE_J_TDGI) REFERENCES PE_J_TDGI(id_PE_J_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

---
CREATE TABLE IF NOT EXISTS PE_Final_TDGE (
	id_PE_Final_TDGE SERIAL NOT NULL,
	estatus CHAR(2) NOT NULL DEFAULT 'PG',
	tipo_mencion CHAR(1) DEFAULT 'N',
	razon_mencion TEXT DEFAULT NULL,
	nota_final INTEGER DEFAULT NULL,
	id_PE_TA_TDGE INTEGER DEFAULT NULL,
	PRIMARY KEY (id_PE_Final_TDGE),
	FOREIGN KEY (id_PE_TA_TDGE) REFERENCES PE_TA_TDGE(id_PE_TA_TDGE)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
ALTER TABLE PE_Final_TDGE
ADD CONSTRAINT estatus_constraint
CHECK (estatus IN ('PG', 'PI','PR'));
/************************************************/

CREATE TABLE IF NOT EXISTS TDGE (
	id_TDGE INTEGER NOT NULL,
	id_PE_final_TDGE INTEGER DEFAULT NULL,
	PRIMARY KEY (id_TDGE),
	FOREIGN KEY (id_PE_final_TDGE) REFERENCES PE_final_TDGE(id_PE_final_TDGE)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS TDGI (
	id_TDGI INTEGER NOT NULL,
	id_PE_Final_TDGI INTEGER DEFAULT NULL,
	PRIMARY KEY (id_TDGI),
	FOREIGN KEY (id_PE_Final_TDGI) REFERENCES PE_Final_TDGI(id_PE_Final_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
CREATE TABLE IF NOT EXISTS Contiene_PE_TE_TDGI (
	id_PE_J_TDGI INTEGER NOT NULL,
	id_PE_TE_TDGI INTEGER NOT NULL,
	nota_TE INTEGER NOT NULL,
	PRIMARY KEY (id_PE_J_TDGI,id_PE_TE_TDGI),
	FOREIGN KEY (id_PE_J_TDGI) REFERENCES PE_J_TDGI(id_PE_J_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_PE_TE_TDGI) REFERENCES PE_TE_TDGI(id_PE_TE_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS Especialidad_profesor (
	id_profesor INT NOT NULL, 
	id_especialidad INT NOT NULL,
	descripcion TEXT NOT NULL,
	PRIMARY KEY (id_profesor, id_especialidad),
	FOREIGN KEY (id_profesor) REFERENCES Profesores(id_profesor) 
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_especialidad) REFERENCES Especialidades(id_especialidad)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

---SOLICITUD DE PROPUESTA DE TRABAJO DE GRADO
CREATE TABLE IF NOT EXISTS SPTG (
	id_SPTG SERIAL,
	titulo VARCHAR(200) NOT NULL,
	modalidad CHAR(1) DEFAULT NULL,
	fechaEnvio DATE NOT NULL DEFAULT CURRENT_DATE,
	estatus CHAR (2) NOT NULL DEFAULT 'PG',
	id_TA INTEGER NOT NULL,
	id_admin_evaluador INTEGER DEFAULT NULL,
	PRIMARY KEY (id_SPTG),
	FOREIGN KEY (id_TA) REFERENCES Profesores(id_profesor) 
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_admin_evaluador) REFERENCES Administradores(id_administrador)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
DROP TABLE IF EXISTS SolicitudTEG;
CREATE TABLE IF NOT EXISTS SolicitudTEG (
	id_STEG INTEGER NOT NULL,
	PRIMARY KEY (id_STEG),
	FOREIGN KEY (id_STEG) REFERENCES SPTG(id_SPTG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

ALTER TABLE SolicitudTEG
ADD CONSTRAINT existe_en_solicitudtig CHECK(validar_existencia_SPTIG(id_steg) = 'false');
CREATE TABLE IF NOT EXISTS SolicitudTIG (
	id_STIG INTEGER NOT NULL,
	id_empresa INTEGER NOT NULL,
	id_ProfesionalE INTEGER NOT NULL, 
	PRIMARY KEY (id_STIG),
	FOREIGN KEY (id_STIG) REFERENCES SPTG(id_SPTG) 
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_empresa) REFERENCES Empresas(id_empresa) 
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_ProfesionalE) REFERENCES ProfesionalesExternos(id_profesionalE) 
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
ALTER TABLE SolicitudTIG
ADD CONSTRAINT existe_en_solicitudteg CHECK(validar_existencia_SPTEG(id_stig) = 'false');
---RELACIONES CORRESPONDIENTES A LA SOLICITUD DE 
---PROPUESTA DE TRABAJO DE GRADO

CREATE TABLE IF NOT EXISTS realiza_SPTG (
	id_SPTG INTEGER NOT NULL,
	id_estudiante INTEGER NOT NULL,
	PRIMARY KEY (id_SPTG,id_estudiante),
	FOREIGN KEY (id_SPTG) REFERENCES SPTG(id_SPTG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_estudiante) REFERENCES Estudiantes(id_estudiante)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS evalua_SPTG (
	id_SPTG INTEGER NOT NULL,
	id_administrador INTEGER NOT NULL,
	fecha_revision DATE NOT NULL DEFAULT CURRENT_DATE,
	PRIMARY KEY (id_SPTG,id_administrador),
	FOREIGN KEY (id_SPTG) REFERENCES SPTG(id_SPTG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_administrador) REFERENCES Administradores(id_administrador)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
-------------------------------------------------
CREATE TABLE IF NOT EXISTS Conforma_Consejo (
	id_CDE VARCHAR(14) NOT NULL,
	id_profesor INTEGER NOT NULL,
	PRIMARY KEY (id_CDE,id_profesor),
	FOREIGN KEY (id_CDE) REFERENCES CDE(id_CDE)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_profesor) REFERENCES Profesores(id_profesor)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
----------------------------------------
----------------------------------------
----------------------------------------
CREATE TABLE IF NOT EXISTS PTG (
	id_PTG INTEGER NOT NULL,
	fecha_entrega DATE DEFAULT NULL,
	estatus CHAR(2) NOT NULL DEFAULT 'PC',
	id_SPTG INTEGER NOT NULL,
	PRIMARY KEY (id_PTG),
	FOREIGN KEY (id_SPTG) REFERENCES SPTG(id_SPTG)
		ON UPDATE RESTRICT 
		ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS Designa_Revisor (
	id_CTG TEXT NOT NULL, 
	id_ProfesorRevisor INTEGER NOT NULL, 
	id_PTG INTEGER NOT NULL,
	fecha_designacion DATE NOT NULL DEFAULT CURRENT_DATE,
	PRIMARY KEY (id_CTG,id_ProfesorRevisor,id_PTG),
	FOREIGN KEY (id_CTG) REFERENCES CTG(id_CTG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_ProfesorRevisor) REFERENCES Profesores(id_profesor)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_PTG) REFERENCES PTG(id_PTG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
-----------------------------------------
CREATE TABLE IF NOT EXISTS TDG (
	id_TDG INTEGER NOT NULL,
	fecha_entrega DATE DEFAULT NULL,
	hora_presentacion TIME DEFAULT NULL,
	estatus CHAR(2) DEFAULT 'PD',
	id_PTG INTEGER NOT NULL,
	PRIMARY KEY (id_TDG),
	FOREIGN KEY (id_PTG) REFERENCES PTG(id_PTG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
-----------------------------------------
CREATE TABLE IF NOT EXISTS Aprueba_Comite (
	id_CTG TEXT NOT NULL,
	id_PTG INTEGER NOT NULL, 
	estatus CHAR(2) NOT NULL DEFAULT 'PA',
	fecha_comite DATE NOT NULL DEFAULT CURRENT_DATE,
	descripcion TEXT DEFAULT NULL,
	PRIMARY KEY (id_CTG,id_PTG),
	FOREIGN KEY ( id_CTG ) REFERENCES CTG(id_CTG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY ( id_PTG ) REFERENCES PTG( id_PTG )
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
CREATE TABLE IF NOT EXISTS Aprueba_Consejo (
	id_CDE TEXT NOT NULL,
	id_PTG INTEGER NOT NULL,
	estatus CHAR(2) DEFAULT NULL,
	descripcion TEXT DEFAULT NULL,
	PRIMARY KEY (id_CDE,id_PTG),
	FOREIGN KEY (id_CDE) REFERENCES CDE(id_CDE)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_PTG) REFERENCES PTG(id_PTG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
CREATE TABLE IF NOT EXISTS Designa_TA (
	id_CDE VARCHAR(13) NOT NULL,
	id_profesor INTEGER NOT NULL,
	id_TDG INTEGER NOT NULL,
	fecha_designacion DATE NOT NULL DEFAULT CURRENT_DATE,
	PRIMARY KEY(id_CDE,id_profesor,id_TDG),
	FOREIGN KEY (id_CDE) REFERENCES CDE(id_CDE)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_profesor) REFERENCES Profesores(id_profesor)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_TDG) REFERENCES TDG(id_TDG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS PTIG (
	id_PTIG INTEGER NOT NULL,
	PRIMARY KEY (id_PTIG),
	FOREIGN KEY (id_PTIG) REFERENCES PTG(id_PTG)
);
CREATE TABLE IF NOT EXISTS PTEG (
	id_PTEG INTEGER NOT NULL,
	PRIMARY KEY (id_PTEG),
	FOREIGN KEY (id_PTEG) REFERENCES PTG(id_PTG)
);
CREATE TABLE PE_REVISOR_PTIG (
	id_PE_REVISOR_PTIG SERIAL,
	desicion_final TEXT NOT NULL,
	fecha_llenado DATE NOT NULL DEFAULT CURRENT_DATE,
	id_PTIG INTEGER NOT NULL,
	PRIMARY KEY (id_PE_REVISOR_PTIG),
	FOREIGN KEY (id_PTIG) REFERENCES PTIG (id_PTIG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);


CREATE TABLE PE_REVISOR_PTEG (
	id_PE_REVISOR_PTEG SERIAL,
	desicion_final TEXT NOT NULL,
	fecha_llenado DATE NOT NULL DEFAULT CURRENT_DATE,
	id_PTEG INTEGER NOT NULL,
	PRIMARY KEY (id_PE_REVISOR_PTEG),
	FOREIGN KEY (id_PTEG) REFERENCES PTEG (id_PTEG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

CREATE TABLE PE_Contiene_CTIG (
	id_PE_REVISOR_PTIG  INTEGER NOT NULL,
	id_Criterios_Rev_TIG INTEGER NOT NULL,
	aprobacion BOOLEAN DEFAULT NULL,
	nota INTEGER DEFAULT NULL,
	PRIMARY KEY (id_PE_REVISOR_PTIG,id_Criterios_Rev_TIG),
	FOREIGN KEY (id_PE_REVISOR_PTIG) REFERENCES PE_REVISOR_PTIG(id_PE_REVISOR_PTIG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_Criterios_Rev_TIG) REFERENCES Criterios_Rev_TIG(id_Criterios_Rev_TIG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
--
CREATE TABLE PE_Contiene_CTEG (
	id_PE_REVISOR_PTEG  INTEGER NOT NULL,
	id_Criterios_Rev_TEG INTEGER NOT NULL,
	aprobacion BOOLEAN DEFAULT NULL,
	nota INTEGER NOT NULL,
	PRIMARY KEY (id_PE_REVISOR_PTEG,id_Criterios_Rev_TEG),
	FOREIGN KEY (id_PE_REVISOR_PTEG) REFERENCES PE_REVISOR_PTEG(id_PE_REVISOR_PTEG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_Criterios_Rev_TEG) REFERENCES Criterios_Rev_TEG(id_Criterios_Rev_TEG)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS Contiene_Criterios_TDGI_TE (
	id_PE_TE_TDGI INTEGER NOT NULL,
	id_Criterios_TDGI_TE INTEGER NOT NULL,
	PRIMARY KEY (id_PE_TE_TDGI,id_Criterios_TDGI_TE),
	FOREIGN KEY (id_PE_TE_TDGI) REFERENCES PE_TE_TDGI(id_PE_TE_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_Criterios_TDGI_TE) REFERENCES Criterios_TDGI_TE(id_Criterios_TDGI_TE)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS Contiene_Criterios_TDGI_J (
	id_PE_J_TDGI INTEGER NOT NULL,
	id_Criterios_TDGI_J INTEGER NOT NULL,
	PRIMARY KEY (id_PE_J_TDGI,id_Criterios_TDGI_J),
	FOREIGN KEY (id_PE_J_TDGI) REFERENCES PE_J_TDGI(id_PE_J_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_Criterios_TDGI_J) REFERENCES Criterios_TDGI_J(id_Criterios_TDGI_J)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS Contiene_Criterios_TDGI_TA (
	id_PE_TA_TDGI INTEGER NOT NULL,
	id_Criterios_TDGI_TA INTEGER NOT NULL,
	PRIMARY KEY (id_PE_TA_TDGI,id_Criterios_TDGI_TA),
	FOREIGN KEY (id_PE_TA_TDGI) REFERENCES PE_TA_TDGI(id_PE_TA_TDGI)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT,
	FOREIGN KEY (id_Criterios_TDGI_TA) REFERENCES Criterios_TDGI_TA(id_Criterios_TDGI_TA)
		ON UPDATE RESTRICT
		ON DELETE RESTRICT
);
/*Insertando listado de usuarios*/
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Luis Carlos', 'Somoza Ledezma', 'lcsomoza.19@est.ucab.edu.ve', '27656348','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Luz Esperanza', 'Medina', 'lemedina@ucab.edu.ve', '99999999','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Luis Noel', 'Somoza Ledezma', 'lnsomoza.19@est.ucab.edu.ve', '27656349','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Luis Fernando', 'Somoza Ledezma', 'lfsomoza.19@est.ucab.edu.ve', '27656350','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Franklin', 'Bello', 'fbelloc@ucab.edu.ve', '00000000','04249749230','admin');
INSERT INTO Usuarios(nombres,apellidos,correo,cedula,telefono,contrasena) VALUES ('Wladimir', 'San Vicente', 'wjsanvicente.18@est.ucab.edu.ve', '27301846','04249749230','admin');
INSERT INTO Estudiantes(id_estudiante) VALUES (1);
INSERT INTO Estudiantes(id_estudiante) VALUES (4);
INSERT INTO Estudiantes(id_estudiante) VALUES (3);
INSERT INTO Administradores(id_administrador,oficina,cargo,experiencia) VALUES (2, 'Oficina', 'cargo',5);
INSERT INTO Profesores(id_profesor) VALUES (5);
INSERT INTO Empresas(nombre,rif,direccion,telefono) VALUES ('hola','hola','hola','hola');
INSERT INTO ProfesionalesExternos(id_profesionale,id_empresa,fecha_aceptacion) VALUES (6,1,'2022-02-21');

INSERT INTO SPTG(titulo, id_ta) VALUES ('Propuesta de Luis Somoza', 5);
INSERT INTO SPTG(titulo, id_ta) VALUES ('Propuesta de Luis Somoza', 5);
INSERT INTO SPTG(titulo, id_ta) VALUES ('Propuesta de Luis Somoza', 5);
INSERT INTO SPTG(titulo, id_ta) VALUES ('Propuesta de Luis Somoza', 5);
UPDATE SPTG SET estatus = 'PG' WHERE id_sptg = 2
INSERT INTO CDE(id_cde) VALUES ('001');
