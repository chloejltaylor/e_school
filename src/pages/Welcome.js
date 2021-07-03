import React from 'react'
import Schedule from './Schedule'
import Loading from './Loading'
import Navbar from '../components/Navbar'
import '../css/nav.css'

class Welcome extends React.Component{

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
        }, 5000)
    }



    render(){
        return (
            <div>

            {this.state.isLoading ?
                <Loading /> :
                <>
                <Navbar/>
                <Schedule />
                </>}


            </div>
        )
    }

}

export default Welcome
