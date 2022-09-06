import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);

    @media (max-height: 700px) {
        height: 135vh;
        padding-top: 10%;
    };
    
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transform: translate(-50%,-50%);

    > div {
        width: min(90%, 600px);
     }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        cursor: pointer;
    }
`;

export const ButtonClose = styled.div`
    width: min(90%, 600px);
    display: flex;
    justify-content: flex-end;

    > button {
        border: none;
        background: none;
        font-size: 30px;
        color: #fff;
    }
`;