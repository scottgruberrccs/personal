import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const cardInfo = [
  {
    id: 1,
    title: 'React 25 X 5 Clock',
    description: 'A countdown clock that cycles between session and break periods. Built with React.',
    buttonText: 'View in CodePen',
    link: 'https://codepen.io/scarletknight21/full/KKggoNQ',
    mainImg: 'clock-main.jpg',
    thumbImg: '../images/thumbs/clock-thumb.jpg'
  },
  {
    id: 2,
    title: 'React Calculator',
    description: 'Calculator app built with React and CSS Grid.',
    buttonText: 'View in CodePen',
    link: 'https://codepen.io/scarletknight21/full/GRjqapa',
    mainImg: 'src/images/main/calculator-main.jpg',
    thumbImg: '../images/thumbs/calculator-thumb.jpg'
  },
]

const SampleCards = () => {

 const data = useStaticQuery(graphql`
  query{
    allMdx {
      nodes {
        frontmatter {
          buttonText
          description
          link
          mainImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          order
          thumbImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          type
        }
      }
    }
  }
`)

console.log(data.allMdx.nodes)

  return <>
    {data.allMdx.nodes.map(x => {
      const mainImg = getImage(x.frontmatter.thumbImg)
      return <GatsbyImage image={mainImg} />
    })}
  </>
}




export default SampleCards