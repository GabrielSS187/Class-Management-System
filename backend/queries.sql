   CREATE TABLE IF NOT EXISTS Class (
      id_class VARCHAR(255) PRIMARY KEY,
      name_class VARCHAR(100) NOT NULL,
      responsible VARCHAR(100) UNIQUE NOT NULL
   );

   CREATE TABLE IF NOT EXISTS Students (
      id_student VARCHAR(255) PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      participation INT NOT NULL DEFAULT 1,
      id_student_ref VARCHAR(255),
      FOREIGN KEY (id_student_ref) REFERENCES Class (id_class)
   );

   INSERT INTO Class(id_class, name_class, responsible)
   VALUES(
      "01",
      "Classe 1",
      "Tesla"
   );

      INSERT INTO Class(id_class, name_class, responsible)
      VALUES(
         "02",
         "Classe 2",
         "Einstein"
      );

      INSERT INTO Students(id_student, first_name, last_name, participation, id_student_ref)
      VALUES(
         "20",
         "Gabriel",
         "Silva",
         100,
         "01"
      );

      INSERT INTO Students(id_student, first_name, last_name, participation, id_student_ref)
      VALUES(
         "21",
         "Rick",
         "Hard",
         80,
         "01"
      );

      INSERT INTO Students(id_student, first_name, last_name, participation, id_student_ref)
      VALUES(
         "22",
         "Celio",
         "Default",
         70,
         "02"
      );

      INSERT INTO Students(id_student, first_name, last_name, participation, id_student_ref)
      VALUES(
         "23",
         "Shirley",
         "Santos",
         80,
         "02"
      );