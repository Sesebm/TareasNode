
-- Crear tablas
CREATE TABLE "Users" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "age" int NOT NULL,
  "is_male" bool,
  "role" int NOT NULL
);
CREATE TABLE "Courses" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "level" varchar NOT NULL,
  "teacher" int NOT NULL,
  "videos" int NOT NULL,
  "category" int NOT NULL
);
CREATE TABLE "course videos" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "name" varchar NOT NULL,
  "url" varchar NOT NULL
);
CREATE TABLE "categories" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "category" varchar NOT NULL,
  "description" varchar NOT NULL
);
CREATE TABLE "roles" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "role" varchar NOT NULL,
  "description" varchar NOT NULL
);
CREATE TABLE "usercoursers" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "user" int NOT NULL,
  "course" int NOT NULL,
  "percent" int NOT NULL
);

-- Agregar referencias

ALTER TABLE "usercoursers" ADD FOREIGN KEY ("user") REFERENCES "Users" ("id");
ALTER TABLE "Courses" ADD FOREIGN KEY ("teacher") REFERENCES "Users" ("id");
ALTER TABLE "Users" ADD FOREIGN KEY ("role") REFERENCES "roles" ("id");
ALTER TABLE "usercoursers" ADD FOREIGN KEY ("course") REFERENCES "Courses" ("id");
ALTER TABLE "Courses" ADD FOREIGN KEY ("videos") REFERENCES "course videos" ("id");
ALTER TABLE "Courses" ADD FOREIGN KEY ("category") REFERENCES "categories" ("id");

-- Agregar roles sobre la DB

insert into roles  (id,role,description)
values(1, 'student', 'Persona que cursa estudios');
insert into roles  (id,role,description)
values(2, 'teacher', 'Persona que que imparte un curso');
insert into roles  (id,role,description)
values(3, 'admin', 'Persona que administra el sistema');

-- Agregar usuarios sobre la DB

insert into "Users" (id,name,email,password,age,is_male,role)
values(1,'Hector', 'hector1990@gmail.com','pizzaconh',23,true,1);
insert into "Users" (id,name,email,password,age,is_male,role)
values(2,'Luisa', 'luisana17@gmail.com','lulu123',17,false,1);
insert into "Users" (id,name,email,password,age,is_male,role)
values(3,'Miguel', 'miguelonlol@gmail.com','lolololol123456',21,true,1);
insert into "Users" (id,name,email,password,age,is_male,role)
values(4,'Ana', 'Analucia@gmail.com','SoyAna$',32,false,2);
insert into "Users" (id,name,email,password,age,is_male,role)
values(5,'Pedro', 'PedroGB@gmail.com','MartinezPedro@',39,true,2);
insert into "Users" (id,name,email,password,age,is_male,role)
values(6,'Valentina', 'ValeZagastis@gmail.com','ValeVale$',45,false,3);

-- Agregar categorias sobre la DB

insert into categories  (id,category,description)
values(1, 'Idioma', 'Cursos sobre diferentes idiomas');
insert into categories  (id,category,description)
values(2, 'Tecnologia', 'Cursos sobre todo lo referente al mundo de la tecnología');
insert into categories  (id,category,description)
values(3, 'Ciencia', 'Cursos sobre ciencias naturales');

-- Agregar videos de cursos sobre la DB

insert into "course videos"  (id,name,url)
values(1, 'Ingles', 'www.ingles.com/videos');
insert into "course videos"  (id,name,url)
values(2, 'Quimica', 'www.quimicafacil.com/quimicavideo');
insert into "course videos"  (id,name,url)
values(3, 'C++', 'www.cpluplus.com/cplusplus');

-- Agregar cursos sobre la DB

insert into "Courses"  (id,title,description,level,teacher,videos,category)
values(1,'Ingles', 'Siente y experimenta el placer de aprender y comunicarte verdaderamente en inglés con nuestro curso',
		'easy',5,1,1);
insert into "Courses" (id,title,description,level,teacher,videos,category)
values(2,'Quimica', 'Siente y experimenta el placer de aprender y entender verdaderamente la quimica con nuestro curso',
		'medium',4,3,3);
insert into "Courses" (id,title,description,level,teacher,videos,category)
values(3,'C++', 'Siente y experimenta el placer de aprender y entender verdaderamente C++ con nuestro curso',
		'hard',5,2,2);

-- Agregar usuario por cursos sobre la DB

insert into usercoursers  (id, "user" , course, percent)
values(1, 1, 1, 50);
insert into "usercoursers"  (id,"user",course,percent)
values(2, 1, 2, 60);
insert into "usercoursers"  (id,"user",course,percent)
values(3, 2, 2, 70);
insert into "usercoursers"  (id,"user",course,percent)
values(4, 3, 2, 60);
insert into "usercoursers"  (id,"user",course,percent)
values(5, 3, 3, 70);

-- Agregar join

SELECT  *
FROM "Courses"
INNER JOIN "Users"
ON "Courses".teacher  = "Users".id
INNER JOIN "course videos"  
ON "Courses".videos  = "course videos".id
INNER JOIN categories  
ON "Courses".category  = categories.id;