import { styled } from "styled-components";
import { colors } from "../Title/styles";

export const FooterContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    
`
export const FooterText = styled.p `
    font-size: 13px;
    color: ${colors.PALETTE3};
`
export const FooterSpan = styled.span `
        color: ${colors.PALETTE5};
`
export const FooterCopy = styled.span `
    font-size: 11px;
    color: ${colors.PALETTE3};
`