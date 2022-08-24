export interface ICreateStudentsRequest {
  firstName: string;
  lastName: string;
  participation: number;
};

export interface IEditStudentsRequest {
  firstName?: string;
  lastName?: string;
  participation?: number;
};

export interface INameClassRequest {
  nameClass: string;
};

export interface IStudentIdAndClassName {
  nameClass: string;
  idStudent: string;
};