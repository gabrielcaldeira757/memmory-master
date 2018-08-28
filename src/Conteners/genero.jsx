import React, { Component } from 'react';
import { Grid, Row, Col, DropdownButton, MenuItem, Button, ButtonToolbar } from 'react-bootstrap'

class Genero extends Component {
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
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="./Genero.jsx" role="button" aria-haspopup="true" aria-expanded="false">Cadastro Genero</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Cadastro Game</a>
                                <a class="dropdown-item" href="#">Relatorios Mensais</a>
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
                                        <input type="text" className="form-control" id="inputID" placeholder="ID" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="inputDescricao">Descricao</label>
                                        <input type="text" className="form-control" id="inputSinops" placeholder="Descricao" />
                                    </div>

                                </div>
                            </form>
                        </Col>
                        <Col md={6} mdPush={4}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label for="inputPesGenero">Pesquisa Genero</label>
                                    <input type="text" className="form-control" id="inputPesGenero" placeholder="PesGenero" />
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


export default Genero;
