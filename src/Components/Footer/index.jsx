import React from 'react'
import { Button, Buttons, Container, Content,  Facebook,  Hr, Nav, NavItem, Telegram, Youtube } from './style'
import { navbar } from '../../utils/navbar'

const Footer = () => {
  return (
    <Container>
      <Nav>
         {
                navbar.map(({path,title,hidden},index)=>{
                  return !hidden &&(
                    <NavItem 
                     key={index} to={path}> <small>{title}</small> </NavItem>
                  )
                })
              }
       </Nav>      
          <Buttons>
              <Button> <a href='https://t.me/xk_060'><Telegram/></a> </Button>
              <Button> <Facebook/></Button>
              <Button><Youtube/></Button>
          </Buttons>
          <Hr></Hr>  
          <Content>
          2023 <small>All rights reserved</small> 
          </Content> 
    </Container>
  )
}

export default Footer
