import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  > div {
    height: 100%;
  }
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media (max-width: 930px) {
    padding: 0 10px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  height: 40%;
  padding-left: 10px;
  width: min(100%, 250px);
  font-size: 17px;

  border: none;
  border-radius: 3px;

  @media (max-width: 550px) {
   height: 15%;
  }
`;

export const Button = styled.button`
  height: 40%;
  width: min(20%, 130px);
  font-size: clamp(.750rem, 3vw, 1rem);

  background: none;
  border: 2px solid #fff;
  border-radius: 3px;
  color: white;
  cursor: pointer;

  @media (max-width: 550px) {
    height: 15%;
  }
`;