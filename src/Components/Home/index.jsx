import React from 'react'
import { Container, H1, H4 , H3, Span, Button, Image, Content} from './style'
import bg from '../../assets/bg.jpg'

const Home = () => {
  return (
    <Container>
     <Image src={bg}/>
      <Content>
     <H4>Hello, My name is</H4>
      <H1>Xabiba <Span>Karimova</Span> </H1>
      <H3>I'm a Web Developer.</H3>
      <Button> View My Projects</Button>
      </Content>

      
      
    </Container>
  )
}

export default Home
