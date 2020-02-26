import React from 'react';
import ReactDOM from 'react-dom';
import '../../assets/styles/log-in.css'
import {Link, Redirect} from 'react-router-dom'

export class ResetForm extends React.Component<any, any> {
    constructor(props: object) {
        super(props);
        this.state = {
           password: '',
           confirmationPassword: '',
           email: '',
           isOk: false 
          };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
      const name = event.target.name
      this.setState({
         [name] : event.target.value
      });
  }

    handleSubmit(event: any) {
      fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
        .then(response => {
           response.json()
           return response
          })
        .then(response => {
          if (response.ok) {
            this.setState({
              isOk: true
            })
              return response
          } else {
            ReactDOM.render (
              <span>Your password and confirm password not match or your account was not found.<br/>
              Please sign up.</span>,
              document.getElementById('warning-area')
            )
          }
        })
        event.preventDefault()
    }
        
    redirect() {
      if (this.state.isOk) {
        return (
          <Redirect to="/" />
        )
      }
    }

    render() {
        return (
            <div className="log-in-area">
                <div className="log-in">
                {this.redirect()}
                    <span className="log-in-title">Reset password</span>
                    <Link className="sign-up-link" to="/Sign">Not a member?</Link>
                    <form onSubmit={this.handleSubmit} className="log-in-form" id="form">
                        <input 
                        onChange={this.handleChange} 
                        className="log-in-form_email" 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        placeholder="Email..." />
                        <input 
                        onChange={this.handleChange} 
                        className="log-in-form_pass" 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        placeholder="Password..." />
                         <input 
                        onChange={this.handleChange} 
                        className="log-in-form_pass" 
                        type="password" 
                        name="confirmationPassword" 
                        value={this.state.confirmationPassword} 
                        placeholder="Confirm..." />
                        <div className="log-warning" id="warning-area"></div>
                        <button className="submit-btn" type="submit">Reset</button>
                    </form>
                   </div>
                </div>
                );
              }
  }