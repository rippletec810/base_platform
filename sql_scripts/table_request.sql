use base_platform;

drop table if exists request;
create table request(
  user_id int not null,
  recruit_id int not null,
  add_time bigint not null,
  status enum('ongoing', 'approved', 'rejected') not null
)engine=InnoDB default charset=utf8;
