import React from 'react'
import './css/Login.css'
import { Link } from 'react-router-dom'
import HidePassword from './assets/Images/login/SeePassword-2.png'
import ShowPassword from './assets/Images/login/NotSeePassword-2.png'

class Login extends React.Component{

    constructor(){
        super()
        this.state={
            hidden: true,
            password:"",
            eye: ShowPassword
        }

  this.handlePasswordChange = this.handlePasswordChange.bind(this)
  this.toggleShow = this.toggleShow.bind(this)

    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value});
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden})

        this.state.eye == ShowPassword 
        ? this.setState({eye:HidePassword}) 
        : this.setState({eye:ShowPassword})
        
    }



    render(){

        const passwordStyle = {
             backgroundImage: `url(${this.state.eye})`
            }

        return(
        <div className="loginWrapper">
            <div className="loginImg"></div>

                <div className="welcome">
                    <div className="welcome-wrapper">
                    <br className="login-spacer"/>
                    <br className="login-spacer"/>
                        <span>
                            <h2 className="welcome-text">Welcome on <hr className="strike-through-up"/><hr className="strike-through-down"/><span>board!</span></h2><span className="to-school">to our school</span>
                            <p>To enjoy your learning journey, please log in:</p>
                        </span>
                        <br className="login-spacer"/>
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
                                type= {this.state.hidden ? "password" : "text"}
                                onChange={this.handlePasswordChange}
                                />
                                <span 
                                    style={passwordStyle}
                                    className="show-hide" 
                                    onClick={this.toggleShow}>
                                </span>
                            <p className="landing-page-small">Any troubles? Let us <a href=""> help you</a></p>

                        </div>
                        <div className="login-checkboxWrapper">
                        <input 
                            type="checkbox"
                            name="keepSignedIn"
                         /><span className="landing-page-small">Keep me signed in</span> 
                         </div>

                         <br className="login-spacer"/>

                        <div className="button-wrapper">
                            <Link to="/e_school"><button>Sign in</button></Link>
                        </div>
                    </form>
                
                </div>

        </div>
        )

    }


}


export default Login