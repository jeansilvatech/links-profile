import styled, { keyframes } from "styled-components";


export const colors = {
   PALETTE1:"#023047",
   PALETTE2: "#2a9d8f",
   PALETTE3: "#e9c46a",
   PALETTE4: "#ffb703",
   PALETTE5: "#fb8500",
   DEFAULT: "#FFF"
}
export const imgEnter = keyframes`
      0%{
         transform: rotate(90deg);
      }
`
export const TitleContainer = styled.div `
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-bottom: 30px;
`
export const UserImg = styled.img `
   width: 98px;
   height: 98px;
   border-radius: 50%;
   margin-bottom: 5px;
   padding: 2px;
   animation: ${imgEnter} 2s ease-in-out;
   user-select: none;
`
export const UserName = styled.h1 `
   font-size: 16px;
   font-weight: 600;
   color: #0a0a0a;
   display: flex;
   justify-content: center;
   align-items: center;
`
export const UserDescription = styled.h2 `
   font-size: 14px;
   font-weight:300;
   margin-bottom: 10px;
   color: #0a0a0a;
`
export const TitleSpan = styled.span `
   color: #fff;
`
export const Check = styled.img`
   margin-left: 2px;
`
