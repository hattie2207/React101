import React, { Component } from 'react';

function searchObj(find) {
    "use strict";
    var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";

    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        var result = request.response;

        
    }

}

export default class Search extends Component {

    render() {
        return (
            <div id="searchBox"><input type="text" onChange={(textBoxInput) => this.props.searchProp(searchObj(textBoxInput.target.value))} /></div>
        );
    }
}


