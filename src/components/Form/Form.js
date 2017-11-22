import React from "react";
import "./Form.css";

let Form = (props) => (
  <div className="container-fluid">
    <div className="row header">
      <div className="col-md-2"></div>
      <div className="col-md-8"><h1><i class="fa fa-frown-o" aria-hidden="true"></i>See Faces<i class="fa fa-frown-o" aria-hidden="true"></i></h1></div>
      <div className="col-md-2"></div>
    </div>
    <div className="row">
      <div className="col-md-2 small"></div>
      <div className="col-md-8 form">
        <form onSubmit={props.handleSubmit}>
          <input placeholder="Title" className="input" name="title" value={props.title} onChange={props.handleChange}/>
          <input placeholder="Description" className="input" name="description" value={props.description} onChange={props.handleChange}/>
          <input placeholder="Img Url" className="input" name="url" value={props.url} onChange={props.handleChange}/><br />
          <button type="submit" className="btn btn-success but">Submit</button>
        </form>
      </div>
      <div className="col-md-2 small"></div>
    </div>
  </div>
)
export default Form;
