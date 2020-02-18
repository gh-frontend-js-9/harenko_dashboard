import React from 'react';
import ReactDOM from 'react-dom';
import '../../assets/styles/log-in.css'
import App from '../../App'
import {SignForm} from './SignUp'
import {ResetForm} from './Reset'

const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/login';

export class LoginForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
           email: '',
           password: '' 
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
              <App />,
              document.getElementById('root')
            )
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
        

    render() {
        return (
            <div className="log-in-area">
                <div className="log-in">
                    <span className="log-in-title">Log in</span>
                    <a className="sign-up-link" onClick={() => {ReactDOM.render (<SignForm />, document.getElementById('root')) }}>Not a member?</a>
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
                        <a className="remember" onClick={() => {ReactDOM.render (<ResetForm />, document.getElementById('root')) }}>Forgot password?</a>
                        <button className="submit-btn" type="submit">Log in</button>
                    </form>
                   </div>
                </div>
                );
              }
  }