import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onLoginRequest } from '../action/actions'
import { BaseAction } from '../types/actionTypes'
import { Link, Redirect } from 'react-router-dom'
import { BaseCredentials } from '../types/authTypes'

type LoginProps = {
    handleLogin: (loginData: BaseCredentials) => BaseAction,
    logged: Boolean,
    authError: any
}

class Login extends Component<LoginProps, BaseCredentials> {
    state = {
        email: '',
        password: ''
    }

    _getLoginData() {
        return {
            email: this.state.email,
            password: this.state.password
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as { [P in keyof BaseCredentials]: BaseCredentials[P] });
    }

    handleLogin = () => {
        this.props.handleLogin(this._getLoginData())
    }

    render() {
        if (this.props.logged) {
            return <Redirect to="/movie-bob/" />
        }

        return (
            <div>
                LOGIN
                <label>
                    EMAIL
                    <input type="email" value={this.state.email} name="email" onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    PASSWORD
                    <input type="text" value={this.state.password} name="password" onChange={this.handleChange} />
                </label>
                <br />
                <button onClick={this.handleLogin}>
                    LOGIN
                </button>
                <br />
                <Link to={'/movie-bob/registration'}>Registrate</Link>
                {this.props.authError &&
                    <span>{this.props.authError.message}</span>
                }
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    logged: state.userReducer.logged,
    authError: state.userReducer.authError
})

const mapDispatchToProps = {
    handleLogin: onLoginRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
