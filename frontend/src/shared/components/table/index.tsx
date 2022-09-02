import { useContext, memo, useEffect } from "react";
import { ContextGlobal } from "../../contexts/contextGlobal";

import { Container } from "./styles";

interface TableProps {
  activeModalStudentsForm: (idStudent: string) => void;
};

export const Table = ({ activeModalStudentsForm }: TableProps) => {
  const { studentsList } = useContext(ContextGlobal);

  return (
    <Container>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Participation</th>
              </tr>
            </thead>

            <tbody>
              {studentsList.map((student) => {
                return (
                  <tr
                    key={student.id_student} 
                    onClick={
                        () => activeModalStudentsForm(student.id_student)
                      }
                    >
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                    <td>{student.participation}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    </Container>
  );
};

export default memo(Table);