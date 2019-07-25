import React, { Component } from 'react';

import './styles.css';

export default class CardBacklog extends Component {

    render() {
        return(

            <div key={this.props.cdChamado} className="list-group-item">
                <span className="header-chamado">{this.props.cdChamado}
                    &nbsp;-&nbsp;
                    <span className="header-chamado-title">{this.props.clienteChamado}&nbsp;-&nbsp;{this.props.severidadeChamado}</span>
                </span>
                <span className="description-chamado">                   
                    <p>{this.props.dsChamado}</p>
                </span>
            </div>

        )
    }

}