import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import './registeration1.css';

export class Registeration1 extends Component {
    constructor(props) {
        super(props)
            this.state = {
                companyname: '',
                companyemail: '',
                password: '',
                password1: '',
                googleEmail:'',
                googleName:''
            
        }
        
        
    }
    handleSubmit = (e) => {
       e.preventDefault()
       const data = {
           companyname: this.state.companyname,
           companyemail: this.state.companyemail,
           password: this.state.password,
           password1: this.state.password1
       }
       this.setState({
            companyname: '',
            companyemail: '',
            password: '',
            password1: '' 
       })
       if(data.companyname === ''){
           document.querySelector('.nameerror').innerHTML = `<p>Name cannot be blank<p>`
           return
       } else {
        document.querySelector('.nameerror').innerHTML = ``
       }
       if(data.companyemail === '' || !data.companyemail.includes('@')){
            document.querySelector('.emailerror').innerHTML = `<p>Please type in a valid email address<p>` 
            return
       } else {
            document.querySelector('.emailerror').innerHTML = `` 
       }
       if(data.password === '' || data.password !== data.password1){
            document.querySelector('.passworderror1').innerHTML = `<p>Either password field is empty or passwords didn't match. <p>`
            return
       } else {
            document.querySelector('.passworderror1').innerHTML = ``
       }
    
    
       document.querySelector('.success').innerHTML = `<p>Form submitted successfully</p>`
       console.log(data)
    }
    responseGoogle = (response) => {
      // console.log(response.profileObj)
      this.setState({
        googleEmail:response.profileObj.email,
        googleName:response.profileObj.name
      })
      const data = {
        googleEmail: this.state.googleEmail,
        googleName: this.state.googleName,
      }
      console.log(data)
    }


    render() {
        return (
            <div className='flex-container'>
               <div className='image'></div> 
               <div className="outerDiv">
                <form className='form' onSubmit={this.handleSubmit}>
                    <h1><span>P</span>ROJECT</h1>
                    <h4>Sign Up Now</h4>
                    <div className='form-control'>
                      <div><label htmlFor='companyname'>Company Name</label></div>
                      <input type='text' name='companyname' value={this.state.companyname} onChange={(e) => this.setState({ companyname : e.target.value })}></input>
                      <div className='nameerror error'></div>
                    </div>
                    <div className='form-control'>
                      <div><label htmlFor='companyemail'>Company Email</label></div>
                      <input type='text' name='companyemail' value={this.state.companyemail} onChange={(e) => this.setState({ companyemail : e.target.value })}></input>
                      <div className='emailerror error'></div>
                    </div>
                    <div className='form-control'>
                      <div><label htmlFor='password'>Password</label></div>
                      <input type='password' name='password' value={this.state.password} onChange={(e) => this.setState({ password : e.target.value })}></input>
                    </div>
                    <div className='form-control'>
                      <div><label htmlFor='password1'>Repeat Password</label></div>
                      <input type='password' name='password1' value={this.state.password1} onChange={(e) => this.setState({ password1 : e.target.value })}></input>
                      <div className='passworderror1 error'></div>
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

                    <input type='submit'></input>
                </form>
               </div> 
            </div>
        )
    }
}

export default Registeration1
