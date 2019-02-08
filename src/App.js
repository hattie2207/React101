import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Header from props",
      content: "Content from props"
    }

    this.changeHeader = (h) => this.setState({
      header: h
    });

    this.changeContent = (c) => this.setState({
      content: c
    });
  }

  render() {

    return (
      <div>
        <Header headerProp={this.state.header}/>
        <Content contentProp={this.state.content}/>
        <button onClick={() => {this.changeHeader("Hello")}}>Change Header</button>
        <button onClick={() => {this.changeContent("World")}}>Change Content</button>
      </div >
    );

  }
}

export default App;
