import styled from "styled-components";


const Container=styled.div`
height: 650px;
background-image: linear-gradient(to top right,  #0f0124, #0e0121,#0e0121, #0f0124 );


 `
const Image=styled.img`
width: 100%;
height: 100%;
position: absolute;

`
const Content=styled.div`
position: relative;
padding: 110px 100px;

`

const H1=styled.h1`
color: white;
margin: 20px 0px 20px;
font-size: 55px;
font-family: 'Dancing Script', cursive;
` 
const H3=styled.h3`
color: white;
font-size: 25px;
margin-bottom: 50px;
` 
const H4=styled.h4`
color: #fff;
letter-spacing: 2px;
font-size: 20px;
` 
const Span=styled.span`
color: var(--colorPrimary);
font-family: 'Dancing Script', cursive;
`
const Button=styled.button`
background-color: transparent;
display: inline-block;
margin-left: 40px;
font-size: 15px;
font-family: "Play", sans-serif;
font-weight: 700;
padding: 20px 32px 20px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 2px;
position: relative;
z-index: 1;
border:none;
  :hover::before{
height: 100%;
width: 100%;
  }
  :hover::after{
height: 100%;
width: 100%;
  }
  :before{
position: absolute;
left: 0;
top: 0;
height: 30px;
width: 30px;
border-left: 3px solid #00bfe7;
border-top: 3px solid #00bfe7;
content: "";
z-index: -1;
-webkit-transition: all, 0.7s;
-o-transition: all, 0.7s;
transition: all, 0.7s;
  }
  :after{
position: absolute;
right: 0;
bottom: 0;
height: 30px;
width: 30px;
border-right: 3px solid #00bfe7;
border-bottom: 3px solid #00bfe7;
content: "";
z-index: -1;
-webkit-transition: all, 0.7s;
-o-transition: all, 0.7s;
transition: all, 0.7s;
  }
`

export {Container,H1,H3,H4,Span,Button,Image,Content}