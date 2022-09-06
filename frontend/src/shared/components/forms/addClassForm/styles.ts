import styled from "styled-components";

export const Container = styled.main`
  /* width: min(90%, 600px); */
  background-color: #00bfff;
  color: #fff;
  border-radius: 20px;
  padding-top: 90px;
  padding-bottom: 90px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > h1 {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  > div button {
    padding: 10px;
    border: 2px solid #fff;
    border-radius: 3px;
    background: none;
    color: #fff;
    cursor: pointer;
  }

  > div input {
    padding: 15px;
    width: max(70%, 20vw);
    border: none;
    border-radius: 3px;
    padding-left: 5px;
  }
`;