import React, { Component } from 'react';

export default class Content extends Component {

    render() {
        return (
            <div><h1>{this.props.contentProp}</h1></div>
        );
    }

}
