import React, { Component } from 'react';
import { Grid, Row, Col, DropdownButton, MenuItem, ButtonToolbar, Button } from 'react-bootstrap'

class Games extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Locação de Games Memmory</h2>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link " href="#">Locação</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Games</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="./games.jsx" role="button" aria-haspopup="true" aria-expanded="false">Cadastro Game</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="./genero">Cadastro Genero</a>
                                    <a class="dropdown-item" href="#">Relatorios Mensais</a>
                                </div>
                            </li>
                        </ul>   
                </div>
                <Grid />
                <Row className="show-grid">
                    <Col md={6} mdPush={6}>
                        <Row className="show-grid">
                            <Col md={4} mdPush={6}>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label for="inputID">ID</label>
                                            <input type="tex" className="form-control" id="inputID" placeholder="ID" />
                                        </div>  
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label for="inputTitulo">Titulo</label>
                                            <input type="text" className="form-control" id="inputTitulo" placeholder="Titulo" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label for="inputSinopse">Sinopse</label>
                                            <input type="text" className="form-control" id="inputSinops" placeholder="Sinopse" />
                                        </div>
                                    </div>
                                    
                                </form>
                            </Col>
                            <Col md={4} mdPush={6}>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label for="inputVdiario">Valor Diario</label>
                                            <input type="tex" className="form-control" id="inputVdiario" placeholder="Vdiario" />
                                        </div>  
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} mdPull={6}>
                        <div>
                            <div className="form-group">
                                <h2>
                                    <label for="inputGenero">Genero: </label>
                                </h2>
                                <DropdownButton
                                    bsStyle={Genero.toLowerCase()}
                                    title={title}
                                    key={i}
                                    id={`dropdown-basic-${i}`}
                                >
                                    <MenuItem eventKey="1" active >Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                    <MenuItem eventKey="3">Active Item</MenuItem>
                                    
                                </DropdownButton>
                            </div>
                            <div className="form-group">
                                <h2>
                                    <label for="inputGenero">Jogadores: </label>
                                </h2>
                                <DropdownButton
                                   bsStyle={Genero.toLowerCase()}
                                   title={title}
                                   key={i}
                                   id={`dropdown-basic-${i}`}
                                >
                                    <MenuItem eventKey="1" active >1 Jogandor</MenuItem>
                                    <MenuItem eventKey="2">2 Jogadores</MenuItem>
                                    <MenuItem eventKey="3">3 Jogadores</MenuItem>
                                    <MenuItem eventKey="3">4 Jogadores</MenuItem>
                                    <MenuItem eventKey="3">Jogo online</MenuItem>
                                    
                                </DropdownButton>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div>
                    <ButtonToolbar>
                        <div>
                            <Button bsStyle="success" bsSize="large"> Salvar </Button>
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


export default Games;
