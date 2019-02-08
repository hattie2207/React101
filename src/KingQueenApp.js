import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';
import './KingQueenApp.css';
// import KingQueenObj from './KingQueenObj';

class KingQueenApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }

        this.displayResult = (t) => this.setState({      
            text: t
        });
    }

    render() {

        return (
            <div>
                <Search searchProp={this.displayResult} />
                <Result resultProp={this.state.text} />
            </div >
        );

    }
}

export default KingQueenApp;
