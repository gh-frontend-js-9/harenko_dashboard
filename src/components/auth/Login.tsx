import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { loginFetchData } from '../../store/actions/loginActions'
import '../../assets/styles/log-in.css'

class LoginForm extends React.Component<any, any> {
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
      [name]: event.target.value
    });
  }

  handleSubmit (event: any) {
    this.props.fetchData('https://geekhub-frontend-js-9.herokuapp.com/api/users/login', this.state)
    this.setState({isOk: true})
    event.preventDefault()
  }

  redirect() {
    if (this.state.isOk) {
      return (
        <Redirect to="/dashboard" />
      )
    }
  }

  render() {
    return (
      <div className="log-in-area">
        <div className="log-in">
          {this.redirect()}
          <span className="log-in-title">Log in</span>
          <Link className="sign-up-link" to="/sign">Not a member?</Link>
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
            <Link className="remember" to="/reset">Forgot password?</Link>
            <button className="submit-btn" type="submit">Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    fetchData: state.fetchData
  }
}

const mapDispatchToProps = (dispath: any) => {
  return {
    fetchData: (url: string, loginUserData: object) => dispath(loginFetchData(url, loginUserData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);