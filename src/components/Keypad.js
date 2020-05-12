// Code Keypad Component Here
import React from "react"

export default class Keypad extends React.Component {

    handlePass = () => console.log('Entering password...')

    render() {
        return (
        <input onKeyUp={this.handlePass}  type="password" />)
    }
}

