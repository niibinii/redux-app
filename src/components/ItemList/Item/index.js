import React from "react";
import Item from "./Item.js";
import {connect} from "react-redux";
import {deleteFace} from "../../../actions";

class ItemContainer extends React.Component {
  constructor() {
    super();
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.deleteFace(this.props.index);
  }
  render() {
    return (<Item {...this.props} handleRemove={this.handleRemove}/>)
  }
}
export default connect(null, {deleteFace})(ItemContainer);
