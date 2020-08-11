import { Link } from "gatsby"
import React from "react"
import '../Controller/style.scss'
import Icon from "../Icon/index"

const Controller = props => (
    <div className={props.fixed?"controller fixed container":"controller"}>
            <div className="select-option" >
                <div className="active" onClick={props.onClick}>{props.activeNav}<Icon name="chevron-down" size="20"></Icon></div>
                {props.typeshow? <ul className="select-item">
                  {props.nav.map((item,index)=>{
                    return <li key={index} onClick={() => props.onClick(item)}>
                              <Link to={"#"+item.label.replace(' ','-').toLowerCase()}>{item.title}</Link>
                            </li>
                  })}
                </ul>: <></> }
            </div>
            <span className="hr"></span>
            <div className="searchbox">
                <div className="search-input">
                  <Icon name="magnifier" size="20" type="coloured"></Icon>
                  <div className="input-symbol">
                    <input placeholder="搜索Icons" 
                      onChange={props.onChange}
                    ></input>
                  </div>
                </div>
            </div>
          </div>
)
export default Controller