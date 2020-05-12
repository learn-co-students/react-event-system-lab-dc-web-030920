import React, { Component } from 'react';

export default class EyesOnMe extends Component{

    blurFunc = () => console.log('Hey! Eyes on me!')

    focusFunc = () => console.log("Good!")

    render(){
        return <button onBlur={this.blurFunc} onFocus={this.focusFunc}></button>
    }
}

// export default EyesOnMe;