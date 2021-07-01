import React from 'react'
import './css/Login.css'
import { Link } from 'react-router-dom'

class Login extends React.Component{

    constructor(){
        super()
        this.state={
            username: "",
            id:""
        }

  

    }

    render(){

        

    return(
        <div className="loginWrapper">

                <div className="loginImg"></div>

                <div className="welcome">
                    <div className="welcome-wrapper">
                    <br className="login-spacer"/>
                    <br className="login-spacer"/>
                        <span>
                            <h2>Welcome on <hr className="strike-through-up"/><hr className="strike-through-down"/><span>board!</span></h2><span className="to-school">to our school</span>
                            <p>To enjoy your learning journey, please log in:</p>
                        </span>
                        <br className="login-spacer"/>
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
                            />
                        </div>

                        <div className="landing-page-input-area">
                            <p className="landing-page-input-label">School personal ID</p>
                            <input 
                                className="landing-page-input-field"
                                id="password-field"
                                type="password"
                                name="id"
                                />
                            <p className="landing-page-small">Any troubles? Let us <a href=""> help you</a></p>

                            <span 
                                toggle="#password-field" 
                                className="fa fa-fw fa-eye toggle-password">
                            </span>
                        </div>
                        <div className="login-checkboxWrapper">
                        <input 
                            type="checkbox"
                            name="keepSignedIn"
                         /><span className="landing-page-small">Keep me signed in</span> 
                         </div>

                         <br className="login-spacer"/>

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