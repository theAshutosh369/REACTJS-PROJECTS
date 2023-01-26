import react from 'react'

class Cheader extends react.Component{
    render(){
        return (
            <>
                <h2>noice car deadpool</h2>
                <h1>Hello {this.props.name}- {this.props.last} </h1>
            </>
        )
    }
}
export default Cheader
