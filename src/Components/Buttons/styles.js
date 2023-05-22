import { styled } from "styled-components";
import { colors } from "../Title/styles";

export const BtnLink = styled.a `
    text-decoration: none;
    background: linear-gradient(to left, ${colors.PALETTE3},${colors.PALETTE4},${colors.PALETTE5});
    color: ${colors.PALETTE1};
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    padding: 15px 10px;
    border-radius: 25px;
    transition: 500ms;
    &:hover{
        background: ${colors.PALETTE5};
    }
    @media (max-width:600px) {
        width: 85%;
    }
    
`
