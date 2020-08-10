import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Icon from "../components/Icon/index"
import "bulma/bulma.sass"
import DetailsModal from "../components/DetailsModal/index"
import Controller from "../components/Controller/index"

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
        nav:  [],
        icon: {},
        activeNav: "全部",
        typeshow: false
      }
  }
  componentWillMount(){
    const allnav = this.props.data.allNavYaml
    this.setState({
      nav: allnav
    })
  }
  showIconsDetails = (e) =>{
    if (e===undefined) {
      return {}
    }
    this.setState({
      isShow: !this.state.isShow,
      icon: e
    })
  }
  showSelect = (e)=>{
    if (this.state.typeshow === true) {
      console.log("show")
      this.setState({
        typeshow: !this.state.typeshow,
        activeNav: e.title
      })
    }
    this.setState({
        typeshow: !this.state.typeshow,
    })
  }
  filterIcons = (e) =>{
    let content = []
    this.props.data.allNavYaml.nodes.forEach(function(items,index){
     console.log(items.label)
     const re = items.items.filter( item => item.label.toLowerCase().match(e.target.value))
     const item = {'label': items.label ,'title':items.title ,'description':items.description ,'items':re}
     content.push(item)
    })
    this.setState({
      nav: content
    })
  }
  render(){
      return <>
      {this.state.isShow? 
            <DetailsModal
            icon={this.state.icon}
            onClick={this.showIconsDetails}
            ></DetailsModal>: <></>}
      <Layout>
          <div id="all">
          <h1 className="title">更懂企业产品的开源 Icon System</h1>
          <p >Kube Icon 是一套由设计师及前端开发工程共同构建并开源的 Icon System, 脱胎于QingCloud 设计团队, 适用于企业级中后台产品及云计算产品中. 一切图标都是免费的,可用于个人和商业用途</p>
          </div> 
          {console.log(this.state.nav)}
          <Controller 
            activeNav={this.state.activeNav}
            nav={this.state.nav}
            typeshow={this.state.typeshow}
            onClick={(item)=>this.showSelect(item)}
            onChange={this.filterIcons}
          ></Controller>
          {this.state.nav.nodes.map((item,index)=>{
            return <div key={index} className="IconContent" id={item.label.replace(' ','-').toLowerCase()}>
                    <h6 className="title is-6"> {item.title} ({item.label})</h6>
                    <div className="content">
                    <p>{item.description}</p>
                    </div>
                    {item.items.length>0? <ul className="ICons">
                      {item.items.map((item,index)=>{
                        return <li key={index} onClick={()=> this.showIconsDetails(item)}>
                          <Icon name={item.label.replace(' ','-').toLowerCase()} type="coloured" size="48" />
                          <p>{item.label}</p>
                          </li>
                      })}
                    </ul>: <></>}
                    
                    
                  </div>
          })}
      </Layout>
  </>
    }
  }
  
  

export default IndexPage;