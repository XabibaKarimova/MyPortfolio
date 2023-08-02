import styled from "styled-components";

const Container=styled.div`
height:600px;
`
const Top=styled.div`
height:85px;
background-image: linear-gradient(to top right,  #0b021a, #15042d,#1c043e, #27045b,#3f098f );
padding-top: 20px;
padding-left: 550px;
`
const H1=styled.h1`
color: var(--colorSecondary);
`

const Bottom=styled.div`
height: 600px;

`

const Image=styled.img`
height:500px;
width:100%;
position: absolute;
`
const Box=styled.div`
height: 300px;
width: 40%;
position: relative;
padding: 50px;
`

const Message=styled.div`

`

const Input=styled.input`
margin: 10px;
position: relative;
background-color: rgba(255,255,255,0.1);
border-color: #eee;
height: 50px;
width: 200px;
padding: 5px 20px;
border-radius: 15px;
color:#fff;
`
const Text=styled.textarea`
position: relative;
background-color: rgba(255,255,255,0.1);
border-color: #eee;
padding-left: 10px;
border-radius: 15px;
color:#fff;
margin-left: 15px;
margin-top: 15px;
padding: 20px;
`
const Button=styled.button`
margin: 20px;
padding: 10px 40px;
font-weight: 900;
`

export {Container,Top,Bottom,Image,H1,Input,Box,Message,Text,Button}