import * as React from 'react'
import styled from 'styled-components'
import SampleCards from '../components/sampleCards'
import Layout from '../components/layout'

const pic = '../images/main/clock-main.jpg'



const Portfolio = () => {

  const pics = ['../images/main/clock-main.jpg', '../images/thumb/clock-thumb.jpg']

  return <Layout>
      <Header>Work Samples</Header>
      <SampleCards />
  </Layout>
  
}

const Header = styled.h1`
font-size: 1.6rem;
`

export default Portfolio