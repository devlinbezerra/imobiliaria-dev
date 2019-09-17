create database facil;
create table usuario (
id int unsigned not null auto_increment,
user_name varchar(255) not null,
pwd varchar(255) not null,
primary key(id));

create table pessoa (
id int unsigned not null auto_increment,
nome varchar(180) not null,
cpf varchar(65),
rg varchar(65),
data_nascimento date,
profissao varchar(180),
rua varchar(255),
complemento varchar(255),
bairro varchar(180),
cidade varchar(180),
estado varchar(65),
cep varchar(15),
telefone_comercial varchar(65),
telefone_residencial varchar(65),
tipo varchar(65) not null,
estado_civil varchar(65) not null,
conjuge int unsigned,
renda varchar(65),
anotacao varchar(500),
primary key(id),
constraint fk_pessoa_conjuge foreign key (conjuge) references pessoa(id));

create table dados_bancarios (
id int unsigned not null auto_increment,
banco varchar(180) not null,
tipo_conta varchar(65) not null,
agencia varchar(65) not null,
conta varchar(65) not null,
titular varchar(180) not null,
cpf_titular varchar(65) not null,
cliente int unsigned not null,
primary key(id),
constraint fk_dados_bancarios_cliente foreign key (cliente) references pessoa (id));

create table imoveis (
id int unsigned not null auto_increment,
matricula varchar(180),
descricao varchar(255) not null,
rua varchar(255),
complemento varchar(255),
bairro varchar(180),
cidade varchar(180),
estado varchar(65),
cep varchar(15),
proprietario int unsigned not null,
anotacao varchar(500),
primary key (id),
constraint fk_imovel_proprietario foreign key (proprietario) references pessoa (id)
);

create table contratos (
id int unsigned not null auto_increment,
numero_contrato varchar(65),
imovel int unsigned not null,
contratante int unsigned not null,
contratado int unsigned not null,
inicio date not null,
termino date not null,
link varchar(350),
primary key (id),
constraint fk_contratos_imovel foreign key (imovel) references imoveis(id),
constraint fk_conratos_contratante foreign key (contratante) references pessoa(id),
constraint fk_conratos_contratado foreign key (contratado) references pessoa(id));

create table debitos (
id int unsigned not null auto_increment,
vencimento date not null,
pagamento date,
contrato int unsigned not null,
tipo varchar(180) not null,
valor float not null,
status varchar(65),
primary key(id),
constraint fk_debitos_contrato foreign key (contrato) references contratos (id));



