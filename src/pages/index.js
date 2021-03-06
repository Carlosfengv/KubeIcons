import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Icon from "@kube-design/icons/"
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
        activeNav: "",
        typeshow: false,
        fixed: false,
        colored: {
          primary: '#324558',
          secondary: '#b6c2cd',
        }
      }
  }
/*   componentWillMount(){
    const allnav = this.props.data.allNavYaml.nodes 
    const hash = window.location.hash.replace('#',"")
    const activeNav = allnav.filter( item => item.label.toLowerCase()===hash)
    if (activeNav.length===0) {
      this.setState({
        nav:allnav,
        activeNav: '全部'
      })
    }else{
      this.setState({
        nav: allnav,
        activeNav: activeNav[0].title
      })
    }
    
  } */
  componentDidMount(){
    window.addEventListener('scroll', this.bindHandleScroll)
    const allnav = this.props.data.allNavYaml.nodes 
    const hash = window.location.hash.replace('#',"")
    const activeNav = allnav.filter( item => item.label.toLowerCase()===hash)
    if (activeNav.length===0) {
      this.setState({
        nav:allnav,
        activeNav: '全部'
      })
    }else{
      this.setState({
        nav: allnav,
        activeNav: activeNav[0].title
      })
    }
  
  }
  bindHandleScroll=(event)=>{
    // 滚动的高度
    const scrollTop =  window.pageYOffset
    if(scrollTop > 170){
      this.setState({
        fixed: true
      })
    }else{
      this.setState({
        fixed: false
      })
    }
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
     const re = items.items.filter( item => item.label.toLowerCase().match(e.target.value))
     const item = {'label': items.label ,'title':items.title ,'description':items.description ,'items':re}
     if (re.length!==0) {
        content.push(item)
     }
     
    })
    this.setState({
      nav: content
    })
  }
  ColorChange = (e) => {
    console.log(e.target.name)
    if(e.target.name === "dark"){
      console.log("dark"+e.target.value)
      this.setState({
        colored: {
          primary: e.target.value,
          secondary: this.state.colored.secondary,
        }
      })
    }else{
      console.log("light"+e.target.value)
      this.setState({
        colored: {
          primary: this.state.colored.primary,
          secondary: e.target.value,
        }
      })
    }
  }
  colorhandleChange = (item) =>{
    console.log(item)
  }
  render(){
      return <>
      {this.state.isShow? 
            <DetailsModal
            color={this.state.colored}
            icon={this.state.icon}
            onClick={this.showIconsDetails}
            ></DetailsModal>: <></>}
          <Layout>
            <div id="all">
                <h1 className="title">更懂企业产品的开源 Icon System</h1>
                <p >Kube Icon 是一套由设计师及前端开发工程共同构建并开源的 Icon System, 脱胎于QingCloud 设计团队, 适用于企业级中后台产品及云计算产品中. 一切图标都是免费的,可用于个人和商业用途</p>
            </div> 
            <Controller 
                  activeNav={this.state.activeNav}
                  nav={this.state.nav}
                  fixed={this.state.fixed}
                  typeshow={this.state.typeshow}
                  onClick={(item)=>this.showSelect(item)}
                  onChange={this.filterIcons}
                  ColorChange={this.ColorChange}
                  DefaultColor={this.state.colored}
                  handleChange={(item)=>this.colorhandleChange(item)}
                ></Controller>
              <main>
          
          {this.state.nav.map((item,index)=>{
            return <div key={index} className="IconContent" id={item.label.replace(' ','-').toLowerCase()}>
                    <h6 className="title is-6"> {item.title} ({item.label})</h6>
                    <div className="content">
                    <p>{item.description}</p>
                    </div>
                    {item.items.length>0? <ul className="ICons">
                      {item.items.map((item,index)=>{
                        return <li key={index} onClick={()=> this.showIconsDetails(item)}>
                          <Icon name={item.label.replace(' ','-').toLowerCase()} color={this.state.colored} size="60" />
                          <p>{item.label}</p>
                          </li>
                      })}
                    </ul>:<div className="ICons"> 暂未找到相关 Icons</div>}
                    
                    
                  </div>
          })}
              </main>
          
      </Layout>
  </>
    }
  }
  
  

export default IndexPage;