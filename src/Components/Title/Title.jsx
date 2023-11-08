import React from "react";
import * as J from './styles'
import logo from '../../assets/logojs.png'
import check from '../../assets/checked.svg'

const Title = ()=>{
    return(
        <J.TitleContainer>
            <J.UserImg src={logo} alt="" />
            <J.UserName>@jeansil<J.TitleSpan>vatech</J.TitleSpan> <J.Check src={check} alt="selo de verificação" title="Usuário Verificado" /> </J.UserName>
            <J.UserDescription>Front End D<J.TitleSpan>eveloper Jr</J.TitleSpan></J.UserDescription>
        </J.TitleContainer>
    )
}
export default Title;