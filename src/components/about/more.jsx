import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

export function MoreAboutSection () {
  const {swapi} = useStaticQuery(
    graphql`
      query {
        swapi {
          pageBy(uri: "our-story") {
            id
            pageId
            title
            date
            uri
            content
          }
        }
      }
    `
  )
  return (
    <>
      <section className="section">
        <div className="section-content">
        
        </div>
      </section>
    </>
  )
}