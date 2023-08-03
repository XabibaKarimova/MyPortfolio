import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { navbar } from '../utils/navbar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { H1 } from './style'


const Root = () => {
  return (
    <div>

      <BrowserRouter>
    <Navbar/>
      <Routes>
        {
          navbar.map(({path,element})=>{
            return(
              <Route  path={path} element={element}/>
            )
          })
        }
        
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='*' element={<H1>404 NOT FOUND<p><small>Sorry! <br /> This page is yet to develop. I'm working on that</small> </p></H1>  }/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Root