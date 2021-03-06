import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 2rem;
    backdrop-filter: blur(15px);
    background-color: rgb(255, 255, 255, 0.6);

    h4 {
        color: #808080;
        font-weight: bold;
        font-size: 13px;
        margin-top: 2rem;

        span {
            color: #FF8D8D;
            cursor: pointer;
        }
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }

    button {
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        padding: 0 1rem;
        margin: 1rem 0;
        height: 40px;
        border: none;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.3);
        border-radius: 1rem;
        background: #70ed89;
        color: #fff;
        font-weight: 600;
        cursor: pointer;

        transition: all 0.2s ease-in;
        &:hover {
            transform: translate(-5px);
        }
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;

    img {
        height: 6rem;
    }

    h3 {
        text-align: center;
        color: #FF8D8D;
        font-weight: 600;
        font-size: 22px;
    }

    span {
        color: #5dc399;
        font-weight: 400;
        font-size: 18px;
    }
`;

const Terms = styled.p`
    padding: 0 1rem;
    text-align: center;
    font-size: 10px;
    color: #808080;
    font-weight: 300;
`;

export { Container, LogoWrapper, Form, Terms }
