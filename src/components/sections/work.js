import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Text from "../helpers/text"
import { Box } from "../styled"

import sizes from "../../global/sizes"

const S = {}
S.Section = styled.section`
  position: relative;
  background-color: var(--background-color);

  ::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 0px;
    height: 50px;
    width: 4px;
    margin-left: -2px;
    background-color: var(--primary-color);
  }
`
S.Box = styled(Box)`
  @media (max-width: ${sizes.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: var(--space-between) auto auto var(--space-between);
  }
`
S.Text = styled(Text)`
  min-width: 0;
  min-height: 0;
  align-self: center;
`
S.Title = styled(S.Text)`
  grid-column: 1/4;

  h2 {
    color: var(--primary-color);
  }

  @media (max-width: ${sizes.sm}) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`

S.ImgContainer = styled.div`
  grid-column: 4/6;
  align-self: center;

  @media (max-width: ${sizes.sm}) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
`

const ImgMusicstars = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "work-musicstars.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <S.ImgContainer>
      <Img fluid={file.childImageSharp.fluid} alt="MUSICSTARS App" />
    </S.ImgContainer>
  )
}

const Work = () => {
  return (
    <S.Section>
      <S.Box>
        <S.Title title="work-1"></S.Title>
        <ImgMusicstars />
      </S.Box>
    </S.Section>
  )
}

export default Work
