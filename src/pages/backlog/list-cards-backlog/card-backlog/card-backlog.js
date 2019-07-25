import React, { Component } from 'react';

import './styles.css';

export default class CardBacklog extends Component {

    render() {
        return(

            <div key={this.props.keyCard}>
                <li className="list-group-item">{this.props.nameCard}</li>
            </div>            

        )
    }

}