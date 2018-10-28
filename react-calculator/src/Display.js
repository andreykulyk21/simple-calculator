import React, { Component } from 'react';

export default class Display extends Component{
    render(){
        const string = this.props.data.join('')
        return <div className="Display">{string}
        </div>
    }
}