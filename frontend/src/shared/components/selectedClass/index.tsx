import { useContext, useEffect } from "react";
import { ContextGlobal } from "../../contexts/contextGlobal";

import { ArrowSquareLeft, ArrowSquareUp } from "phosphor-react";

import { ContainerMessageError } from "./styles";

export const SelectedClass = () => {
  const { classList, getAllClass, getNameClass } = useContext(ContextGlobal);

  useEffect(() => {
    getAllClass();
  }, []);

  return (
    <>
      {
        classList.length ?
        (
          <select 
            onChange={getNameClass}
            title="Escolha uma turma"
            >
            {classList.map(( class_list ) => {
              return (
                <option 
                  key={class_list?.id_class} 
                  value={class_list?.name_class}
                >
                  {class_list?.name_class}
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