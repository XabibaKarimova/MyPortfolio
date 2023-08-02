import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container=styled.div`
background: var(--backgroundPrimary);
color: #fff;


`
const Wrapper=styled.div`
padding: var(--padding);
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
`
const Section=styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight:${({bold})=>bold&&600};
cursor:${({logo})=>logo&&'pointer'};
:first-child{
letter-spacing: 2px;

}
`
const H1=styled.h1`
font-size: 35px;
font-family: monospace;
`

const Span=styled.span`
color: var(--colorPrimary);
font-weight: 700;
`

const NavItem=styled(NavLink)`
color: white;
text-decoration: none;
margin-left: 45px;
position: relative;

:hover{
color: var(--colorPrimary);
transition: .4s;
}
:active{
    transform: scale(1.1);
}
`


const Button=styled.button`
position: relative;
width: 130px;
height: 45px;
background-color: var(--colorPrimary);
border-radius: 8px;
font-size: 15px;
border: 2px var(--colorPrimary) ;
color: var(--backgroundPrimary);
z-index: 1;
overflow: hidden;
::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--backgroundPrimary);
    z-index: -1;
    transition: .5s;
}
:hover::before{
    width: 100%;
   

}
:hover{
    color: var(--colorPrimary);
    border: 2px solid var(--colorPrimary);
    cursor: pointer;
}

`
const Button2=styled.button`
position: relative;
width: 130px;
height: 45px;
border-radius: 8px;
font-size: 15px;
color: var(--colorPrimary);
background-color: transparent;
border: 2px solid var(--colorPrimary);
z-index: 1;
margin-left: 8px;
::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--colorPrimary);
    z-index: -1;
    transition: .5s;
}
:hover::before{
    width: 100%;
   

}
:hover{
    color: var(--backgroundPrimary);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    
}

`

// const Button=styled.button`
//     display: inline-block;
//     font-size: 15px;
//     font-family: "Play", sans-serif;
//     font-weight: 700;
//     padding: 14px 32px 12px;
//     color: #ffffff;
//     text-transform: uppercase;
//     letter-spacing: 2px;
//     position: relative;
//     z-index: 1;

// `


export {Container,Wrapper,Section,NavItem,Button, Button2,Span,H1}