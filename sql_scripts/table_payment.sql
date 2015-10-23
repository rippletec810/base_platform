use base_platform;

drop table if exists payment;
create table payment(
  payment_id int primary key auto_increment,
  reason text not null,
  amount double not null,
  team_id int not null,
  add_time bigint not null,
  type enum('admin-de', 'admin-in', 'shopping') not null,
  num int not null
)engine=InnoDB default charset=utf8;
