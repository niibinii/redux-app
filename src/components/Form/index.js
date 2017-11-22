import React from "react";
import Form from "./Form.js";
import {connect} from "react-redux";
import {addFace} from "../../actions";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      url: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
      [e.target.name]: e.target.value
    }));
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.addFace(this.state.title, this.state.url, this.state.description);
    this.setState((prevState)=>({
      title: "",
      url: "",
      description: ""
    }))
  }
  render() {
    return (<Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>)
  }
}

export default connect(null, {addFace})(FormContainer);
