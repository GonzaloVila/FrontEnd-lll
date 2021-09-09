import data from "./data";
import React, { Component } from "react";

class Historia extends Component {
    constructor(props) {
      super(props);
      
    }

    render(){
        return (<h1 className="historia">{this.props.historia}</h1>);
    }

}
export default Historia;