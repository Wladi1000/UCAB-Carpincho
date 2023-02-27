CREATE OR REPLACE FUNCTION validar_existencia_SPTIG (_id_sptg INTEGER)
RETURNS BOOLEAN
LANGUAGE PLPGSQL
AS
$$
DECLARE
	_result BOOLEAN;
BEGIN
	SELECT EXISTS (
		SELECT STIG.id_stig
		FROM SOLICITUDTIG AS STIG
		WHERE STIG.id_stig = _id_sptg
	)
	INTO _result;
	RETURN _result;
END;
$$;

INSERT INTO SOLICITUDTIG(id_stig,id_empresa,id_profesionale) VALUES (1,1,4);
SELECT validar_existencia_SPTIG(2);