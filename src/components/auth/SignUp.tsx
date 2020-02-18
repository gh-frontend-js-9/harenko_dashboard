import React from 'react';
import ReactDOM from 'react-dom';
import '../../assets/styles/log-in.css'
import {LoginForm} from './Login'

const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/';

export class SignForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
           email: '',
           password: '', 
           name: ''
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
      fetch(url, {
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
            ReactDOM.render (
              <LoginForm />,
              document.getElementById('root')
            )
            return response
          } else {
            ReactDOM.render (
              <span>You are already registered<br/>
              or your password is more than 8 characters</span>,
              document.getElementById('warning-area')
            )
          }
        })
        event.preventDefault()
    }
        

    render() {
        return (
            <div className="log-in-area">
                <div className="log-in">
                    <span className="log-in-title">Sign up</span>
                    <a className="sign-up-link" onClick={() => {ReactDOM.render (<LoginForm />, document.getElementById('root')) }}>Existing member?</a>
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
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        placeholder="Name..." />
                        <div className="log-warning" id="warning-area"></div>
                        <button className="submit-btn" type="submit">Sign up</button>
                    </form>
                   </div>
                </div>
                );
              }
  }