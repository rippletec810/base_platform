use base_platform;

drop table if exists payment_type;
create table payment_type(
  payment_type_id int primary key auto_increment,
  type_name varchar(20) not null,
  parent_id int,
  type enum('0', '1', '2', '3') not null
)engine=InnoDB default charset=utf8;

