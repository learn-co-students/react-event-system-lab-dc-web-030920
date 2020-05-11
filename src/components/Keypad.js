// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
    constructor(){
        super()
    }
    handleKeys = () => {
        console.log('Entering password...')
    }
    render(){
        return <input onKeyUp={this.handleKeys} type="password" />
    }

}

export default Keypad