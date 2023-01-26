
import React, { Component } from 'react'

export class LifecycleA extends Component {
    constructor(props) 
    {
      super(props)
      this.state = {
         qty:0
      }
      console.log("constructor")
    }

    static getDerivedStateFromProps(props , state){
        console.log("getDerivedStateFromProps")
        return <h1>getDerivedStateFromProps</h1>
    }

    updateQty = ()=>{
        this.setState({
            qty:this.state.qty+1
        })
    }

    static componentDidUpdate(prevProps ,prevState)
    {
        console.log("Update done ! ")
    }

    static componentDidMount()
    {
        console.log("componentDidMount")
    }


  render(){
    console.log("render")
    return (
        <div>
            <h1>CART : {this.state.qty}</h1>
            <button onClick={this.updateQty}>update</button>
        </div>
    )
  }
}

export default LifecycleA;


