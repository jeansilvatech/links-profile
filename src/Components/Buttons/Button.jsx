import React from "react";
import * as J from "./styles"

const Button = (props)=>{
    return (
        <J.BtnLink href={props.href} target="_blank">{props.icon} {props.name}</J.BtnLink>
    )
}
export default Button