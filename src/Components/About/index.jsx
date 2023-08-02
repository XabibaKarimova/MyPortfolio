import React from 'react'
import { Blur, Box, Container, Content, H1, Hr, Image } from './style'
import bg from '../../assets/about.jpg'

const About = () => {
  return (
    <Container>
      <Image src={bg} />
      <Box>
        <Blur>
          <H1> About me </H1>
          <Hr />
          <Content><i>
            
            Hi there! My full name is KARIMOVA XABIBA ANVAROVNA. It's just a simple portfolio of mine. I mean, it's my first portfolio website and a bit incomplete.
            But I try my best to improve it. I hope you'll like it. <br /><br />
          
            A little bit about me:
            <br/> 
            Firstly, I'm very keen on programming, and at the moment,  
            I'm learning  React.js. Apart from that, I know HTML, Css and a little bit JavaScript programming languages.
            What's more, I'm curious about cybersecurity, computer science, science, actually, everything in this universe.
            I'm learning them little by little, too. But I need to make more progress. That's why, 
            I need someone who can teach me them. 
            <br/><br />

             By the way, I'm also IELTS 7.5 band score achiever.
             <br/>
            <ul>
              <li>Listening 7.5</li>
              <li>Reading 8.5</li>
              <li>Writing 6.5</li>
              <li>Speaking 6.5</li>
            </ul>
            <br /><br />
            For the time being, I don't have a fully functional contact form on my website. So feel free to reach me via e-mail:</i> <br/>
            <b> karimovaxabiba346@gmail.com </b>
             

          </Content>
        </Blur>
      </Box>

    </Container>
  )
}

export default About
