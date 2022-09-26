import styled from "styled-components";

export const Container = styled.div`
  /* height: 100%; */
  padding-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

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

export const Info = styled.main`
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

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 770px) {
    text-align: center;
  }
`;