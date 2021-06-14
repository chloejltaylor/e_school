import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

class Login extends React.Component{

    constructor(){
        super()
        this.state={
            username:"",
            id:""
        }

        this.handleChange = this.handleChange.bind(this)
    }

handleChange () {
    console.log("working")
}

    render(){

    return(
        <div className="loginWrapper">

<div className="welcome">
                <div className="welcome-wrapper">
                    <span>
                        <h2>Welcome on board!</h2>
                        <p>To enjoy your learning journey, please log in:</p>
                    </span>

                    <span 
                            toggle="#password-field" 
                            className="fa fa-fw fa-eye toggle-password">
                        </span>
                </div>
                    <form>
                        <div className="landing-page-input-area">
                        <p className="landing-page-input-label">School email</p>
                        <input 
                        className="landing-page-input-field" 
                        type="text" 
                        placeholder="user@school.com"
                        name="username"
                        onChange={this.handleChange}
                         />
                        </div>

                        <div className="landing-page-input-area">
                        <p className="landing-page-input-label">School personal ID</p>

          
                        
                        <input 
                            className="landing-page-input-field"
                            id="password-field"
                            type="password"
                            name="id"
                            onChange={this.handleChange}
                            />
                        {/* <p className="landing-page-input-label">Any troubles? Let us <a href=""> help you</a></p> */}

                        <span 
                            toggle="#password-field" 
                            className="fa fa-fw fa-eye toggle-password">
                        </span>
                        </div>
                        <div className="button-wrapper">
                            <Link to="/welcome"><button>Sign in</button></Link>
                        </div>


                    </form>
                
            </div>

        </div>
        )
    }
}

export default Login