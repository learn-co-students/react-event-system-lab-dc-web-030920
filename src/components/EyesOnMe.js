import React, {Component} from 'react'

class EyesOnMe extends Component {
   
    handleFocus = (event) => {
        return console.log('Good!')
    }
    handleBlur = (event) => {
        return console.log('Hey! Eyes on me!')
    }

    render(){

        return(
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
        )
    }
}

export default EyesOnMe