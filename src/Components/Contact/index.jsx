import React from 'react'
import { Bottom, Container, Top,Image, H1, Box, Input, Message, Text, Button } from './style'
import contactbg from '../../assets/contactbg.jpg'
const Contact = () => {
  return (
    <Container>
        <Top>
          <H1>Get in touch</H1>
        </Top>
        <Bottom>
             <Image src={contactbg}/>
            <Box>
              <Input placeholder='First Name'/>
              <Input placeholder='Last Name'/>
              <Input placeholder='Email Address'/>
              <Input placeholder='Phone No.'/>
              <Message>
                <Text placeholder='Message' rows={8} cols={71}/>
              <Button>Send</Button>
              </Message>
            </Box>
           
        </Bottom>
    </Container>

  )
}

export default Contact
