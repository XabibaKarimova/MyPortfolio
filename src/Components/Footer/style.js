import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as tg} from '../../assets/telegram.svg'
import {ReactComponent as fc} from '../../assets/facebook.svg'
import {ReactComponent as yt} from '../../assets/youtube.svg'


const Container=styled.div`
height: 270px;
background-color: var(--backgroundPrimary);
color: #fff ;
/* margin-top: 30px; */

`
const Nav=styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`


const NavItem=styled(NavLink)`
color: white;
text-decoration: none;
margin-left: 45px;
position: relative;
margin-top: 50px;

:hover{
color: var(--colorPrimary);
transition: .4s;
}
:active{
    transform: scale(1.1);
}
`
const Buttons=styled.div`
margin-bottom: 30px;
display: flex;
justify-content: center;
`
const Button=styled.button`
height: 40px;
width: 40px;
border-radius: 50%;
padding: 2px 3px ;
margin-left: 20px;
border: none;
cursor: pointer;
:active{
    transform: scale(0.97);

}
`
const Telegram=styled(tg)`
height: 30px;
width: 30px;
`
const Facebook=styled(fc)`
height: 30px;
width: 30px;
`
const Youtube=styled(yt)`
height: 30px;
width: 30px;
`


const Hr=styled.div`
margin-bottom: 20px;
height: 3px;
background-color: var(--backgroundSecondary) ;
`
const Content=styled.div`
display: flex;
align-items: center;
flex-direction: column;

`
const Warning=styled.div`
color: red;
`

export {Container,NavItem,Buttons,Hr,Nav,Content,Button,Telegram,Facebook,Youtube,Warning}