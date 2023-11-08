import React from "react";
import * as J from "./styles"
const date = new Date()
const year = date.getFullYear();

const Footer = ()=>{
    return(
        <J.FooterContainer>
            <J.FooterText>Desenvolvido <J.FooterWhite>por <J.FooterSpan>Jean Silva</J.FooterSpan></J.FooterWhite></J.FooterText>
            <J.FooterCopy>Copyrigh<J.FooterWhite>t © {year}</J.FooterWhite></J.FooterCopy>
        </J.FooterContainer>
    )
}
export default Footer;