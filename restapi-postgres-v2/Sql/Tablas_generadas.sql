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
DROP TABLE IF EXISTS SPTGs;

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
-------------------------------------------------------------

---------------------------------------------------------------
------------------------------------------------------
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
---SOLICITUD DE PROPUESTA DE TRABAJO DE GRADO
---RELACIONES CORRESPONDIENTES A LA SOLICITUD DE 
---PROPUESTA DE TRABAJO DE GRADO
-------------------------------------------------
----------------------------------------
----------------------------------------
----------------------------------------

-----------------------------------------

-----------------------------------------
--

