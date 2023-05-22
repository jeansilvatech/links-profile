import styled from "styled-components";

export const colors = {
   PALETTE1:"#023047",
   PALETTE2: "#2a9d8f",
   PALETTE3: "#e9c46a",
   PALETTE4: "#ffb703",
   PALETTE5: "#fb8500",
   DEFAULT: "#FFF"
}
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
   margin-bottom: 5px;
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
