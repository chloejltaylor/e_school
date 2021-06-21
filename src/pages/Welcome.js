import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

class Welcome extends React.Component{

    constructor(){
        super()
        this.state={
            isLoading: true,
            name: "Erica"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2500)
    }



    render(){
        return (
            <div>

            {this.state.isLoading ?
                <Loading /> :
                <header>
                <h1>Welcome, {this.state.name} </h1>
                <Link to="/"><p>Back</p></Link>
            </header>}


            </div>
        )
    }

}

export default Welcome