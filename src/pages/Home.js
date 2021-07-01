import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

class Home extends React.Component{

    constructor(){
        super()
        this.state={
            isLoading: true,
            username: ""
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
                username: "Erik"
            })
        }, 2500)
    }



    render(){
        return (
            <div className="homeWrapper">

            {this.state.isLoading ?
                <Loading /> :
                <header>
                <h1>Welcome, {this.state.username} </h1>
                <Link to="/"><p>Back</p></Link>
            </header>}


            </div>
        )
    }

}

export default Home