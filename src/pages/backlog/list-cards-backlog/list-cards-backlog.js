import React, { Component } from 'react';

import './styles.css';

import CardBacklog from './card-backlog/card-backlog';

export default class ListCardsBacklog extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    // Antes do Component ser montado
    componentWillMount() {
        fetch('http://wpoa000939:3000/chamados', {method: 'GET'})
        .then(responseChamados => responseChamados.json())
        .then(dataChamados => this.setState({lista: dataChamados.recordset}));
    }

    render() {
        return(
            <div key="1" className="list-cards-backlog ">
                
                {
                    this.state.lista.filter(chamado => chamado.nmusuario == null).map((currElement) => {
                        return(
                            <CardBacklog 
                                key={currElement.cdchamado} 
                                cdChamado={currElement.cdchamado}
                                clienteChamado={currElement.nmcliente}
                                severidadeChamado={currElement.nmseveridade}
                                dsChamado={currElement.dschamado.length > 90 ? `${currElement.dschamado.substring(0,89)}... ` : currElement.dschamado} 
                            />
                        );
                    })
                }
                
            </div>
        )
    }

}