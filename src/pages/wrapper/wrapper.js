import React, { Component } from 'react';

import './styles.css';
import Backlog from '../backlog/backlog';
import Sprint from '../sprint/sprint';

const dados = {
    backlog: {
        title: "Backlog 3"
    },
    sprint: {
        title: "Sprint"
    }
};

export default class Wrapper extends Component {

    render() {
        return(
            <div className="wrapper">
                <Backlog area={dados.backlog} />
                <Sprint area={dados.sprint} />
            </div>
        )
    }

}