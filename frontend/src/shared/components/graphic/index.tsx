import { useContext, useEffect } from "react";
import { ContextGlobal } from "../../contexts/contextGlobal";

import { Chart } from "react-google-charts";

export const Graphic = () => {
  const { studentsList } = useContext(ContextGlobal);

  //* Adaptando o array para o grafico.
  const adapterChatGraphic = (array: any) => {
    const arrayDestructuring = array.map((i: any) => 
    [i?.first_name, i?.participation]);

    return [["first_name", "Participation"], ...arrayDestructuring];
  };

  const array = adapterChatGraphic(studentsList);

  const options = {
    title: "presence of students",
    is3D: true,
  };
  
  return ( 
        <Chart
          chartType="PieChart"
          data={array}
          options={options}
          width={"100%"}
          height={"400px"}
        />
  );
};