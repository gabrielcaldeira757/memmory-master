import React, { Component } from 'react';
import { Grid, Row, Col, DropdownButton, MenuItem, Button, ButtonToolbar, FormGroup, ControlLabel, FormControl, Table } from 'react-bootstrap'

class Locacao extends Component {
    getGamesList(){ 
        return [
            {
                id: '001',
                name: 'game1',
                dia: 11.50
            },
            {
                id: '002',
                name: 'game2',
                dia: 11.50
            },
            {
                id: '003',
                name: 'game4',
                dia: 11.50
            },
            {
                id: '004',
                name: 'game4',
                dia: 11.50
            }
        ]
    };

    getData(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    getDevol(){
        var devol = this.getData();
        //adicinar 3 dias a data de devolucao
        return devol;
    }

    setGame(e){
        return this.setState({
            selectedGame: e.target.value
        });
    }

    colocaLista(){
        return this.setState({ 
            listaCarrinho: [...this.state.listaCarrinho, this.state.selectedGame]
            // this.setState({ value: e.target.value })
        })
    }

    constructor(props){
        super(props);

        this.state = {
            gamesList: this.getGamesList(),
            dataDia: this.getData(),
            dataDevol: this.getDevol(),
            selectedGame: null,
            listaCarrinho: []
        };

    }

    render() {
        const games = this.state.gamesList.map((game) => {
           return (
                <option key={game.id}>{game.name}</option>
           ); 
        });
        const listagame = this.state.listaCarrinho.length == 0 ? null : this.state.listaCarrinho.map((game) => {
            return(
                <tr>
                    <td>{game.name}</td>
                    <td>{game.dia}</td>
                    <td> <Button bsStyle="danger">X</Button> </td>
                </tr>  
            );
        });
        
        
        return (
            //NavBar - parte suporior onde sera a navegaçao principal do sitema
            <div>
                <div> 
                    <h2>Locação de Games Memmory</h2>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Locação</a>
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
                    <Col md={6} mdPush={4}>
                        <Col md={6} mdPush={4}>
                            <form>
                                <div className="form-row">
                                    <div className="form-group">
                                        <h3>
                                        <label for="inputID">ID: 0000</label>
                                        </h3>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <FormGroup controlId="formControlsSelect">
                                            <Row className="show-grid">
                                                <Col md={6} mdPush={6}>
                                                    <ControlLabel>Games</ControlLabel>
                                                        <FormControl onSelect={this.setGame} componentClass="select" placeholder="GAMES " value=''>
                                                            {games}
                                                        </FormControl>
                                                </Col>
                                                <Col md={6} mdPush={6}>
                                                <br></br>
                                                    <Button onSubmit={this.colocaLista()} bsStyle="success">Colocar game na lista</Button>
                                                </Col>      
                                            </Row>    
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="inputCliente">Nome Cliente</label>
                                        <input type="text" className="form-control" id="inputCliente" placeholder="Nome do Cliente" />
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="inputTelefone">Telefone</label>
                                        <input type="text" className="form-control" id="inputTelefone" placeholder="(31)99999-9999" />
                                    </div>
                                </div>
                            </form>
                        </Col>
                        <Col md={6} mdPush={4}>
                            
                        </Col>
                    </Col>
                    <Col md={6} mdPull={4}>
                        <div>
                            <div>
                                <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>Nome do Game</th>
                                        <th>Valor Diaria</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {listagame}
                                </tbody>
                                </Table>
                            </div>

                        <form>
                                <div className="form-row">
                                    <div className="form-group">
                                        <h2>
                                        <label for="inputID">Data da locação: {this.state.dataDia} </label>
                                        </h2>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <h2>
                                        <label for="inputDescricao">Data da Devolução: {this.state.dataDevol}</label>
                                        </h2>
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="inputValor">Valor da Locação</label>
                                        <h3>
                                        <label for="inputDinheiro">R$: 00,00</label>
                                        </h3>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
                <div>
                    <ButtonToolbar>
                        <div>
                            <Button type="submit" bsStyle="success" bsSize="lg"> Salvar </Button>
                        </div>
                        <div>
                            <Button type="submit" bsStyle="warning" bsSize="lg"> Excluir </Button>
                        </div>
                        <div >
                            <Button type="submit" bsStyle="info" bsSize="lg"> Pesquisar </Button>
                        </div>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}


export default Locacao;
