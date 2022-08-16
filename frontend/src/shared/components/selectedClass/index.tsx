import { useContext } from "react";
import { ContextGlobal } from "../../contexts/contextGlobal";

import { ArrowSquareLeft, ArrowSquareUp } from "phosphor-react";

import { ContainerMessageError } from "./styles";

export const SelectedClass = () => {
  const { classList } = useContext(ContextGlobal);

  return (
    <>
      {
        classList.length ?
        (
          <select title="Escolha uma turma">
            {classList.map(( class_list ) => {
              return (
                <option key={class_list.name} value={class_list.name}>
                  {class_list.name}
                </option>
              )
            })}
          </select>
        ) 
        :
        (
          <ContainerMessageError>
            <span><ArrowSquareLeft size={32} /></span>
            <div>
              <span><ArrowSquareUp size={32} /></span>
            </div>
            <p>Create a class to get started!</p>
          </ContainerMessageError>
        )
      }
    </>
  );
};