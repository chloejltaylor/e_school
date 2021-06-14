import React from 'react'
import { Link } from 'react-router-dom'

function Welcome(){
    return (
        <div>
            <header>
                <h1>Welcome</h1>
                <Link to="/"><p>Back</p></Link>
            </header>
        </div>
    )
}

export default Welcome