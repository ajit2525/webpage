import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import auth from './auth'
import './login.css'

export class Login extends Component {
    constructor(props) {
        super(props)
            this.state = {
                companyemailid: '',
                password: '',
                googleEmail:'',
                googleName:''
            
        }
    }
    
    handleSubmit = (e) => {
       e.preventDefault()
       const data = {
           companyemailid: this.state.companyemailid,
           password: this.state.password,
       }
       this.setState({
            companyemailid: '',
            password: '',
       })

       if(data.companyemailid === '' || !data.companyemailid.includes('@')){
            document.querySelector('.emailiderror').innerHTML = `<p>Please type in a valid email address<p>` 
            return
       } else {
            document.querySelector('.emailiderror').innerHTML = `` 
       }
       if(data.password === ''){
            document.querySelector('.password').innerHTML = `<p>Password field is empty please type again. <p>`
            return
       } else {
            document.querySelector('.password').innerHTML = ``
       }
    
    
       document.querySelector('.success').innerHTML = `<p>Form submitted successfully</p>`
       console.log(data)
       auth.login(() => {
           this.props.history.push('./dashboard')
       })
    }
    responseGoogle = (response) => {
        console.log(response.profileObj)
        this.setState({
            googleEmail:response.profileObj.email,
            googleName:response.profileObj.name
       })
       const data = {
        googleEmail: this.state.googleEmail,
        googleName: this.state.googleName,
       }
       console.log(data)
       auth.login(() => {
        this.props.history.push('./dashboard')
       })
       
    }
    


    render() {
        return (
            <div className='flex-container'>
               <div className='image'></div> 
               <div className="outerDiv">
                <form className='form' onSubmit={this.handleSubmit}>
                    <h1><span>P</span>ROJECT</h1>
                    <h4>Login</h4>
                    <div className='form-control'>
                      <div><label htmlFor='companyemailid'>Company Email Id</label></div>
                      <input type='text' name='companyemailid' value={this.state.companyemailid} onChange={(e) => this.setState({ companyemailid : e.target.value })}></input>
                      <div className='emailiderror error'></div>
                    </div>
                    <div className='form-control'>
                      <div><label htmlFor='password'>Password</label></div>
                      <input type='password' name='password' value={this.state.password} onChange={(e) => this.setState({ password : e.target.value })}></input>
                      <div className='password error'></div>
                    </div>
                    <div className='success'></div>

                    <div className='linkDiv'>
                    Don't have an account?
                    <NavLink exact activeClassName='active_class' className='link' to='/'>
                      SignUp  
                    </NavLink>
                    Already have an account?
                    <NavLink exact activeClassName='active_class' className='link' to='/login'>
                      Login  
                    </NavLink>
                    </div>
                    <div>
                        <GoogleLogin
                        clientId='368129768229-hli2q0gt23o6cr3qf54j12dve3ebdrhe.apps.googleusercontent.com'
                        buttonText='Login with Google'
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}

                        />
                    </div>
                    <input type='submit' value='Login'></input>
                </form>
               </div> 
            </div>
        )
    }
}

export default Login
