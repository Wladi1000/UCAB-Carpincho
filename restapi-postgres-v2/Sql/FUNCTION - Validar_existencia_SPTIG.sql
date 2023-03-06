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