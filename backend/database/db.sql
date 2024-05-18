-- Tabela carro
CREATE TABLE IF NOT EXISTS public.carro
(
    id integer NOT NULL DEFAULT nextval('carro_id_seq'::regclass),
    cor character varying(20) COLLATE pg_catalog."default",
    modelo character varying(40) COLLATE pg_catalog."default",
    ano character varying(4) COLLATE pg_catalog."default",
    CONSTRAINT carro_pkey PRIMARY KEY (id)
)
