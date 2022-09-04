   CREATE TABLE IF NOT EXISTS Class (
      id_class VARCHAR(255) PRIMARY KEY,
      name_class VARCHAR(100) UNIQUE NOT NULL,
      responsible VARCHAR(100) NOT NULL
   );

   CREATE TABLE IF NOT EXISTS Students (
      id_student VARCHAR(255) PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      participation INT NOT NULL DEFAULT 1,
      id_student_ref VARCHAR(255),
      FOREIGN KEY (id_student_ref) REFERENCES Class (id_class)
   );