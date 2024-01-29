import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = () => {
  return (
    <>
  <SiteTitle>Scott Gruber</SiteTitle>
  <LinksList>
    <TopLink><Link to="/about">About Me</Link></TopLink>
    <TopLink><Link to="/portfolio">Portfolio</Link></TopLink>
    <TopLink><Link to="/resume">Resume</Link></TopLink>
    <TopLink><Link to="/contact">Contact</Link></TopLink>
  </LinksList>
  </>
  )
}

const SiteTitle = styled.h1`
font-size: 1.8rem;
`

const LinksList = styled.ul``

const TopLink = styled.li`
  color: blue;
`

export default Header