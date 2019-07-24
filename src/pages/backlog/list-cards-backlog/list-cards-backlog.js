import React, { Component } from 'react';

import './styles.css';

export default class ListCardsBacklog extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    // Antes do Component ser montado
    componentWillMount() {
        fetch('http://wpoa000939:3000/users', { method: 'GET'})
        .then(responseUsers => responseUsers.json())
        .then(dataUsers => this.setState({lista: dataUsers.recordset}))
     }

    // Component acabou de ser montado
    // componentDidMount() { }

    render() {
        return(
            <div className="list-cards-backlog ">
                
                {
                    this.state.lista.map((currElement, index) => {
                        return(
                            <div key={index}>
                                <li className="list-group-item">{currElement.nmusuario}</li>
                            </div>
                        );
                    })
                }
                
            </div>
        )
    }

}