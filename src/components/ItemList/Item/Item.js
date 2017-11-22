import React from "react";
import "./Item.css";

let Item = (props)=>(
  <div className="container">
    <div className="row">
      <div className="col-md-2"></div>
  <div className="col-md-8 item">
    <h3>{props.data.title}</h3>
    <p>{props.data.description}</p>
    <div className="items" style={{backgroundImage:`url("${props.data.url}")`}}></div>
    <button type="button" className="btn btn-danger but-kill" onClick={props.handleRemove}>Delete</button>
  </div>
  <div className="col-md-2"></div>
  </div>
  </div>
)
export default Item;
