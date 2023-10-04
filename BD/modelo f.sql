-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE site+ADM+crud reportagens (
email VARCHAR(250 ),
id code BIGINT(10) PRIMARY KEY,
senha VARCHAR(20 )
)

CREATE TABLE denuncia (
comentário VARCHAR(500 )
)

CREATE TABLE prefeitura (

)

CREATE TABLE usuario (
cpf BIGINT(11 ) not null PRIMARY KEY,
email VARCHAR(10),
Nome VARCHAR(10),
endereço VARCHAR(10)
)

CREATE TABLE idioma (
idioma_PK INTEGER PRIMARY KEY
)

CREATE TABLE faz (
comentário VARCHAR(500 )
)

CREATE TABLE login_cadastro (
id BIGINT(11 ),
FOREIGN KEY(id) REFERENCES usuario (cpf)
)

CREATE TABLE conta (
id code BIGINT(10),
FOREIGN KEY(id code) REFERENCES site+ADM+crud reportagens (id code)
)

