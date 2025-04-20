import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Header />
    {/* Now we want pass dynamicaly Home,aboutus etc. so we use  `Outlet` from react-router-dom. */}
    <Outlet /> 
    {/* is a placeholder for the child routes that will be rendered inside the parent route. */}
    <Footer />
    </>
  )
}

export default Root