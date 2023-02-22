SELECT U.*,P.*, Pr.*,Ad.*
FROM Usuarios as U, SPTG as P, realiza_SPTG as R, Estudiantes AS E,Profesores AS Pr, Administradores AS Ad
WHERE U.id_usuario = E.id_estudiante
AND E.id_estudiante = R.id_estudiante
AND R.id_sptg = P.id_sptg
AND P.id_ta = Pr.id_profesor
AND P.id_admin_evaluador = Ad.id_administrador