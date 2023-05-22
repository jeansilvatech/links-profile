import React from "react";
import * as J from './styles'

const Title = ()=>{
    return(
        <J.TitleContainer>
            <J.UserImg src="https://github.com/jeansilvatech.png" alt="" />
            <J.UserName>@jeansilvatech</J.UserName>
            <J.UserDescription>Front End Developer Jr</J.UserDescription>
        </J.TitleContainer>
    )
}
export default Title;