import React from 'react';
import Icon from '../Icon/index';
import '../DetailsModal/style.scss'

const DetailsModal = props => (
    <div className="modal is-active" >
              <div className="modal-background"  onClick={props.onClick}></div>
              <div className="modal-content">
              <div className="box">
                <div className="iconbox">
                    <Icon name={props.icon.label.replace(' ','-').toLowerCase()} type="coloured" />
                </div>
                <div className="details">
                    <h4 className="title is-4">{props.icon.label}</h4>
                    <article className="use">
                    <h7 className="title is-7">在 KubeIcons 中使用(推荐)</h7>
                    <pre>{`<Icon name="`+ props.icon.label.replace(' ','-').toLowerCase()+`" size="medium" />`}</pre>
                    </article>
                </div>
                <hr></hr>
                <div className="codebox">
                    <h6 className="title is-7">SVG Code</h6>
                    <pre>{`<svg id="kubed-icon-` + props.icon.label.replace(' ','-').toLowerCase()+ `" aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;"version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >`+
                        document.getElementById(("kubed-icon-"+ props.icon.label.replace(' ','-').toLowerCase())).innerHTML + `</svg>`}</pre>
                </div>
                
              </div>
                
              </div>
          <button className="modal-close is-large" aria-label="close" onClick={props.onClick}></button>
        </div>
)

export default DetailsModal