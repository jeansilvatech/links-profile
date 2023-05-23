import styled, { keyframes } from "styled-components";


export const colors = {
   PALETTE1:"#023047",
   PALETTE2: "#2a9d8f",
   PALETTE3: "#e9c46a",
   PALETTE4: "#ffb703",
   PALETTE5: "#fb8500",
   DEFAULT: "#FFF"
}
export const border = keyframes `
      0%, 100%{
         border: 2px solid ${colors.PALETTE5}
      }
      25%{
         border: 2px solid ${colors.PALETTE3}
      }
      50%{
         border: 2px solid ${colors.PALETTE4}
      }
`
export const TitleContainer = styled.div `
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: ${colors.PALETTE4};
   margin-bottom: 10px;
`
export const UserImg = styled.img `
   width: 98px;
   height: 98px;
   border-radius: 50%;
   border: 2px solid;
   margin-bottom: 5px;
   padding: 2px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   animation: ${border} 5s infinite;
`
export const UserName = styled.h1 `
   font-size: 16px;
   font-weight: 600;
`
export const UserDescription = styled.h2 `
   font-size: 14px;
   font-weight:300;
   margin-bottom: 10px;
`
