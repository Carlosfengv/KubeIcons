import React from "react"
import Layout from "../components/layout"
import { graphql , useStaticQuery } from "gatsby"
import Icon from "../components/Icon"
import "bulma/bulma.sass"

export default function IndexPage(){
    const data = useStaticQuery(graphql`{
      allFile (filter: {relativeDirectory: {ne: "Sprites"}}) {
        group(field: relativeDirectory) {
          field
          fieldValue
          totalCount
          edges {
            node {
              id
              name
              relativePath
              relativeDirectory
              absolutePath
            }
          }
        }
      }
    }
     `)
    return <Layout>
              <h1>Simply Delightful Icon System</h1>
              <p>KubeDesign Icon is a set of open-source neutral-style system symbols elaborately crafted for designers and developers.
All of the icons are free for both personal and commercial use.</p>
              {console.log(data)}
              {data.allFile.group.map((item,index)=>{
                return <div key={index} className="IconContent" id={item.fieldValue}>
                        <h2 className="title"> {item.fieldValue} </h2>
                        <ul className="ICons">
                          {item.edges.map((item,index)=>{
                            return <li key={index}>
                              <Icon name={item.node.name.slice(4)} type="coloured" size="48"  changeable />
                              <p>{item.node.name.slice(4).replace("-"," ")}</p>
                              </li>
                          })}
                        </ul>
                        
                      </div>
              })}
          </Layout>
}
