import React from 'react'

import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </>
  )
}

const Content = styled.div`
width: 100%;
max-width: 800px;
display: block;
margin: auto;
`

export default Layout