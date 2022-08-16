import styled from "styled-components";

export const Container = styled.div`
  width: min(90%, 600px);
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 20px;
  background-color: #00bfff;
  color: #fff;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1, h2 {
    padding: 20px;
    font-weight: 400;
  }

  h2 {
    font-size: 30px;
    border: 2px solid;
    font-weight: 300;
  }

  button {
    padding: 10px;
    border: 2px solid #fff;
    border-radius: 3px;
    background: none;
    color: #fff;
    cursor: pointer;
    transition: .5s;

    &:hover {
      background-color: red;
    }
  }
`;