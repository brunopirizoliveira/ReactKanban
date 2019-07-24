import React, { Component } from 'react';

import './styles.css';
import Backlog from '../backlog/backlog';
import Sprint from '../sprint/sprint';

const dados = {
    backlog: {
        title: "Backlog 1"
    },
    sprint: {
        title: "Sprint"
    }
};

export default class Wrapper extends Component {

    render() {
        return(
            <div className="wrapper">
                <Backlog backlog={dados.backlog} />
                <Sprint sprint={dados.sprint} />
            </div>
        )
    }

}