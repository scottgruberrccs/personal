import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { headerFont, textFont } from '../../styleVars/styles'

const Header = ({path}) => {
  return (
    <>
    <HeaderContainer>
    <div>
  <SiteTitle>{window.location.href.includes('portfolio') && 'Scott Gruber'}</SiteTitle>
  </div>
  <div>
  <LinksList>
    <TopLink><NavLink to="/about">About Me</NavLink></TopLink>
    <TopLink><NavLink to="/portfolio">Portfolio</NavLink></TopLink>
    <TopLink><NavLink to="/resume">Resume</NavLink></TopLink>
    <TopLink><NavLink to="/contact">Contact</NavLink></TopLink>
  </LinksList>
  </div>
  </HeaderContainer>
  </>
  )
}

const HeaderContainer = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
height: 60px;
`

const SiteTitle = styled.h1`
font-size: 1.8rem;
font-family: ${textFont};
font-weight: 800;
margin: 0px;
`

const LinksList = styled.ul`
list-style-type: none;
`

const TopLink = styled.li`
  color: orange;
  font-family: ${headerFont};
  display: inline-block;
  margin: 0px 20px;
`

const NavLink = styled(GatsbyLink)`
color: black;
text-decoration: none;
font-size: 1.2rem;
font-weight: 500;
`

export default Header