import styled from "styled-components";


const Container=styled.div`
height: 650px;
`
const Image=styled.img`
width: 100%;
height: 100%;
position: absolute;

`
const Box=styled.div`
padding: 70px 200px;
`
const Blur=styled.div`
height: 500px;
position: relative;
background-color: rgba(255,255,255,0.2);
border-radius: 15px;
padding: 30px 60px;
color: var(--colorSecondary);

`
const H1=styled.h1`
text-align: center;
margin-bottom: 10px;

`
const Hr=styled.hr`
width: 50%;
margin-left: 25%;
margin-bottom: 30px;
`
const Content=styled.p`

`

export {Container,Image, Box,H1,Hr,Content,Blur}