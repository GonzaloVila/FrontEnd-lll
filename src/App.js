import Historial from "./components/Historial"
import Botones from "./components/Botones"
import Historia from "./components/Historia"
import json from "./components/data.json"
import React from "react"



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayJson: [],
      historiaActual: {},
      historial: [],
      idActual: 1
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        arrayJson: json,
        historiaActual: json[0]
      })
    }, 2000)
  }

  handlerClick = (evento) => {
    let id = this.state.idActual + 1;
    id = id + evento.target.id;
    let historiaProxima = this.state.arrayJson.find((cadauno) => id === cadauno.id)
    if (historiaProxima != null){
    this.setState({
      historiaActual: historiaProxima,
      idActual: this.state.idActual + 1,
      historial: [...this.state.historial, evento.target.id.toUpperCase()]
      
    })
  }
  }

  render() {
    return (
      this.state.arrayJson.length > 0 ? 
      <div className="App">
        <div className="layout">

          <Historia historia={this.state.historiaActual.historia} />
          <Botones onClick={this.handlerClick} opc={this.state.historiaActual.opciones} />
          <Historial historial={this.state.historial} />

        </div>
      </div>
      :
      <p className = "carga"> Cargando... </p>
    );
  }
}

export default App;
