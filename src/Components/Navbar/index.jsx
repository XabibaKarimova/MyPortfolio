import React from 'react'
import { Container, NavItem, Wrapper,Section, Button, Button2, Span, H1 } from './style'
import { navbar } from '../../utils/navbar'
import { Outlet, useNavigate } from 'react-router-dom'





const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
        <Wrapper>
            <Section onClick={()=>navigate('/home')} bold logo> <H1> Portfo<Span>lio</Span> </H1></Section>
            <Section>
            {
                navbar.map(({path,title,hidden},index)=>{
                  return !hidden &&(
                    <NavItem 
                     key={index} to={path}>{title}</NavItem>
                  )
                })
              }
              

            </Section>
            <Section>
              <Button onClick={()=>navigate('signup')}>Sign Up</Button>
              <Button2 onClick={()=>navigate('login')}>Log In</Button2>
            </Section>
        </Wrapper>
        <Outlet/>
    </Container>
  )
}

export default Navbar
