import data from "./data";
import React, { Component } from "react";

class Historial extends Component {
    constructor(props) {
      super(props);
      
    }


    render(){
        return (
            <div className="recordatorio">
                <h3 > Seleccion anterior: {this.props.historial[this.props.historial.length - 1]} </h3>
                <h3 > Historial de opciones elegidas: </h3>
                    <ul> 
                        {this.props.historial.map((opc, i) => <li key={i}>{opc}</li>).slice(0, this.props.historial.length - 1)}    
                    </ul>
            </div>
        );
    }
}
export default Historial;