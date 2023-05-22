import React from "react";
import * as J from "./styles"
const date = new Date()
const year = date.getFullYear();

const Footer = ()=>{
    return(
        <J.FooterContainer>
            <J.FooterText>Desenvolvido por <J.FooterSpan>Jean Silva</J.FooterSpan></J.FooterText>
            <J.FooterCopy>Copyright © {year}</J.FooterCopy>
        </J.FooterContainer>
    )
}
export default Footer;