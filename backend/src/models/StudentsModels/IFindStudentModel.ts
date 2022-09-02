interface IOutputStudentModel {
    id_student: string;
    first_name: string;
    last_name: string;
    participation: number;
};

export interface IFindStudentModel {
  find: (idStudent: string) 
  => Promise<IOutputStudentModel>;
}