// Code EyesOnMe Component Here

// Code Keypad Component Here
import React from 'react';

// import EyesOnMe from './EyesOnMe';

export default class EyesOnMe extends React.Component {
 
    constructor (props) {
        super(props)
        this.state = {
            focus: false
            }
    this._onBlur = this._onBlur.bind(this)
    this._onFocus = this._onFocus.bind(this)

    }
    _onFocus() {
        if (!this.state.focus) {
            this.setState({
                focus: true,
            });
        }
        return console.log("Good!")

    }

    _onBlur(){
        setTimeout(() => {
            if (this.state.focus) {
                this.setState({
                    focus: false,
                });
            }
        }, 0);
        return console.log("Hey! Eyes on me!")

    }
   
    render() {
      return (
        <div>
        <button onFocus={this._onFocus} onBlur={this._onBlur} >Button</button>
        </div>
      );
    }
  }