-- FUNCTION: public.fn_update_reservation_status()

-- DROP FUNCTION IF EXISTS public.fn_update_reservation_status();

CREATE OR REPLACE FUNCTION public.fn_update_reservation_status(
	)
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
BEGIN
    UPDATE Reservations
    SET reservation_status = 3
    WHERE registration_date::date = current_date - interval '1 day'
		  AND reservation_status = 1;
END;
$BODY$;

ALTER FUNCTION public.fn_update_reservation_status()
    OWNER TO postgres;
