import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Icon from "../components/Icon"
import "bulma/bulma.sass"

export const query = graphql`
  {
    allNavYaml {
      nodes {
        label
        title
        description
        items {
          label
          title
        }
      }
    }
  }
`

class IndexPage extends Component{
  constructor(props){
    super(props);
      this.state = {
        isShow: false,
        nav:  {}
      }
  }
  
  componentWillMount(){
    this.setState({
      nav: this.props.data.allNavYaml
    })
    console.log('willmount')
    console.log(this.props.data.allNavYaml)
  }
  
  render(){
      return <Layout>
      <h1 className="title">Simply Delightful Icon System</h1>
      <p className="subtitle">KubeDesign Icon is a set of open-source neutral-style system symbols elaborately crafted for designers and developers.
All of the icons are free for both personal and commercial use.</p>
      {console.log('111111')}
      {console.log(this.state.nav)}
      {this.state.nav.nodes.map((item,index)=>{
        return <div key={index} className="IconContent" id={item.label}>
                <h4 className="title is-5"> {item.title} ({item.label})</h4>
                <div  className="content">
                <p>{item.description}</p>
                </div>
                <ul className="ICons">
                  {item.items.map((item,index)=>{
                    return <li key={index}>
                      <Icon name={item.label.replace(' ','-').toLowerCase()} type="coloured" size="48" />
                      <p>{item.label}</p>
                      </li>
                  })}
                </ul>
                
              </div>
      })}
  </Layout>
    }
  }
  
  

export default IndexPage;