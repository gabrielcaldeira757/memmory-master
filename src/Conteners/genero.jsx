import React, { Component } from 'react';
import { Grid, Row, Col, DropdownButton, MenuItem, Button, ButtonToolbar } from 'react-bootstrap'

class myButton extends Component{
    render(){
        return(
            <Button  onClick={() => {this.props.handleclick(this.props.event);}}  
            >
            {this.props.event}
            
            </Button>

        )
    }
}

class myInput extends Component{
    render(){
        return(
            <input type="text" className="form-control" id="inputPesGenero" placeholder="PesGenero" />
        )
    }
}

class myLabel extends Component{
    render(){
        return{

        }
    }
}

class Genero extends Component {
    constructor(props){
        super(props);
   
        this.state = {
          valoresGenero: '',
          valorInput: '',
          id: 'ID genero',
          descricao: '',
          pesquisa: ''
        };
    }
    
    setValoresGeneros(valoresGenero){
        this.setState({valoresGenero})
    }

    setValorInput(valorInput){
        this.setState({valorInput})
    }
    setTextInput(event){
        console.log('lo')
        this.setState({id: event.target.value})
        this.setState({descricao: event.target.value})
        this.setState({pesquisa: event.target.value})
    }
    render() {
        return (
            <div>
                <div> 
                    <h2>Locação de Games Memmory</h2>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link " href="#">Locação</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Games</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="./Genero.jsx" role="button" aria-haspopup="true" aria-expanded="false">Cadastro Genero</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Cadastro Game</a>
                                <a className="dropdown-item" href="#">Relatorios Mensais</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <Grid />
                <Row className="show-grid">
                    <Col md={6} mdPush={6}>
                        <Col md={6} mdPush={4}>
                            <form>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="inputID">ID</label>
                                        <myInput type="text" className="form-control" id="inputID" placeholder="ID" value={this.setValorInput} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="inputDescricao">Descricao</label>
                                        <myInput type="text" className="form-control" id="inputSinops" placeholder="Descricao" value={this.state.descricao} />
                                    </div>

                                </div>
                            </form>
                        </Col>
                        <Col md={6} mdPush={4}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label for="inputPesGenero">Pesquisa Genero</label>
                                    <input type="text" className="form-control" id="inputSinops" placeholder="Descricao" value={this.state.pesquisa} />
                                </div>
                            </div>
                        </Col>
                    </Col>
                    <Col md={6} mdPull={6}>
                        <div>
                            
                        </div>
                    </Col>
                </Row>
                <div>
                    <ButtonToolbar>
                        <div>
                            <Button info="info" bsSize="large" handleclick={this.setTextInput.bind(this)} lable="test"> test </Button>
                        </div>
                        <div>
                            <Button bsStyle="warning" bsSize="large"> Excluir </Button>
                        </div>
                        <div>
                            <Button bsStyle="info" bsSize="large"> Editar </Button>
                        </div>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}


export default Genero;
