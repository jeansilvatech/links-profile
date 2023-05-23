import React from "react";
import * as J from "./styles"

const Button = (props)=>{
    return (
        <J.BtnLink href={props.href} target="_blank">{props.icon} <J.BtnText>{props.name}</J.BtnText></J.BtnLink>
    )
}
export default Button