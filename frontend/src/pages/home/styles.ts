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

export const Align = styled.div`
  /* height: 100%; */
  padding-top: 20px;
  display: flex;
  justify-content: center;

 .graphic{
  margin-top: -47px;
 }

 .table {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 300;

  > .info-class {
    display: flex;
    gap: 20px;

    > button {
      &:hover {
        color: red;
      }
    }
  }
 }

  @media (max-width: 770px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const Informations = styled.main`
  width: 80%;
  /* height: 65vh; */
  
  display: flex;
  justify-content: center;
  /* padding-top: 50px; */

  > div {
    width: 50%;
    display: flex;
    justify-content: center;

     button {
      font-size: 16px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  @media (max-width: 770px) {
    width: 100%;
    /* height: 25vh; */
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 0;

    > div {
      width: 100%;
      align-items: center;    
    }
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

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 770px) {
    text-align: center;
  }
`;