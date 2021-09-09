import data from "./data";
import React, { Component } from "react";

class Botones extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        return (
            <div className= "opciones">
                <h2 className="opcion"> <button id = "a" onClick={this.props.onClick} className="botones"> A </button> {this.props.opc.a}  </h2>
                <h2 className="opcion"> <button id = "b" onClick={this.props.onClick} className="botones"> B </button> {this.props.opc.b} </h2>
            </div>
        )
    }
}
export default Botones;