import styled from "styled-components";

interface MainProps {
  isActiveModalForm: boolean;
};

export const Main = styled.main<MainProps>`
  height: ${({ isActiveModalForm }: MainProps) => 
    isActiveModalForm ? "100vh;" : "normal;"  
  };
  
  overflow: ${({ isActiveModalForm }: MainProps) => 
    isActiveModalForm ? "hidden !important;" : "normal;"  
  };
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  padding: 40px 10px;
  text-align: center;
  font-size: clamp(.800rem, 3vw, 1rem);

  > h1, h4 {
    padding-top: 20px;
  }

  > h1 {
    font-weight: 400;
  }

  > h4 {
    font-weight: 300;
  }
`;

export const OptionsButtonsContainer = styled.div`
  width: 95%;
  display: flex;
  gap: 20px;

  > button {
    width: max(30px, 2vw);
    font-size: 20px;
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  
    > button {
      margin-top: -25px;
    }
    > select {
      width: 75px;
  }
}
`;