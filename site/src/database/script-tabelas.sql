create database elolords;
use elolords;

create table usuario(
id_usuario int primary key auto_increment,
nome_usuario varchar(40),
idade int,
email varchar(40),
senha varchar(40)
);

create table questionario(
id_questionario int primary key auto_increment,
quest1 char(1),
quest2 char(1),
quest3 char(1),
quest4 char(1),
quest5 char(1),
quest6 char(1),
quest7 char(1),
quest8 char(1),
quest9 char(1),
quest10 char(1),
acertos char(1),
fk_usuario int,
foreign key(fk_usuario)references usuario(id_usuario)
);

__________________________________________________________________________________________________________________
create table usuario(
id_usuario int primary key identity(1,1),
nome_usuario varchar(40),
idade int,
email varchar(40),
senha varchar(40)
);

create table questionario(
id_questionario int primary key identity(500,1),
quest1 char(1),
quest2 char(1),
quest3 char(1),
quest4 char(1),
quest5 char(1),
quest6 char(1),
quest7 char(1),
quest8 char(1),
quest9 char(1),
quest10 char(1),
acertos char(1),
fk_usuario int,
foreign key(fk_usuario)references usuario(id_usuario)
);