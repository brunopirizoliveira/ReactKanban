import React, { Component } from 'react';

import './styles.css';

export default class HeaderBacklog extends Component {

    render() {
        return(
            <div className="header-backlog">
                {this.props.title}
            </div>
        )
    }

}