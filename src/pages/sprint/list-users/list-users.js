import React, { Component } from 'react';

import './styles.css';
import ListCardsUsers from './list-cards-users/list-cards-users';

export default class ListUsers extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    componentWillMount() {
        fetch('http://wpoa000939:3000/users', { method: 'GET'})
        .then(responseUsers => responseUsers.json())
        .then(dataUsers => this.setState({lista: dataUsers.recordset}))
    }    

    render() {
        return(
            <div>
                {
                    this.state.lista.map((users) => {
                        return( 
                            <ListCardsUsers 
                                key={users.nmusuario} 
                                user={users.nmusuario} 
                            />            
                        );
                    })
                }
            </div>
        )
    }

}