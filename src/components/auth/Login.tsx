import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom'
import '../../assets/styles/log-in.css'

export class LoginForm extends React.Component<any, any> {
    constructor(props: Object) {
        super(props);
        this.state = {
           email: '',
           password: '',
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
      fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/login', {
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
              <span>Oops, looks like your email or password is incorrect.<br/>
              Please try again</span>,
              document.getElementById('warning-area')
            )
          }
        })
        event.preventDefault()
    }
        
    redirect() {
      if (this.state.isOk) {
        return (
          <Redirect to="/Dashboard" />
        )
      }
    }

    render() {
        return (
            <div className="log-in-area">
                <div className="log-in">
                  {this.redirect()}
                    <span className="log-in-title">Log in</span>
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
                        <div className="log-warning" id="warning-area"></div>
                        <Link className="remember" to="/Reset">Forgot password?</Link>
                        <button className="submit-btn" type="submit">Log in</button>
                    </form>
                   </div>
                </div>
                );
              }
  }