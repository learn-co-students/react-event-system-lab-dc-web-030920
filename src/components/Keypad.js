import React, {Component} from 'react'

class Keypad extends Component {

    logPWText = (event) => {
        return console.log('Entering password...')
    }

    render(){
        return(
            <input onKeyUp={this.logPWText} type="password" />
        )
    }

}

export default Keypad