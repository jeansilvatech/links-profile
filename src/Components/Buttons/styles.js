import { styled } from "styled-components";

export const BtnLink = styled.a `
    text-decoration: none;
    border: 1px solid #C1C1C1;
    color:#0a0a0a;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    padding: 15px 10px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    user-select: none;
    transition: 500ms;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transition: 500ms;
    }
    @media (max-width:600px) {
        width: 85%;
    } 
`
 export const BtnText = styled.span `
    width: 100px;
    color: #fff;
`