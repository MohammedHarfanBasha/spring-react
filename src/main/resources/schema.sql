drop table if exists client_config;

drop table if exists client;

create table client (
                id integer(10) not null,
                system_oid varchar(50) not null,
                lmi_name varchar(50) not null,
                lmi_validation tinytext not null,
                status int(5) not null,
                created_on datetime not null,
                created_by varchar(45) not null,
                modified_on datetime,
                modified_by varchar(45) not null,
                name varchar(255) not null,
                email varchar(225) not null
                );

create table client_config(
                cid integer not null,
                key_parameters varchar(225),
                value_parameters varchar(255),
                primary key (cid),
                foreign key (lmi_id) references client(id)
);

