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