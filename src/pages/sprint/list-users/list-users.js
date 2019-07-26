import React, { Component } from 'react';

import './styles.css';

import api from '../../../services/api';

import ListCardsUsers from './list-cards-users/list-cards-users';

export default class ListUsers extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    async componentWillMount() {

        const response = await 
        api.get('/users'); 
               
        this.setState({ lista: response.data.recordset });
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