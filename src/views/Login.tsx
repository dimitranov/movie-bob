import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { onLoginRequest } from '../action/actions'
import { BaseAction } from '../types/actionTypes'
import { Link, Redirect } from 'react-router-dom'
import { BaseCredentials } from '../types/authTypes'
import { AuthInputFields, initialInputValues } from './Registration'

type LoginProps = {
    handleLogin: (loginData: BaseCredentials) => BaseAction,
    logged: Boolean,
    authError: any
}

const Login = ({
    handleLogin,
    authError,
    logged,
}: LoginProps) => {
    const [inputs, setInputs] = useState<AuthInputFields>(initialInputValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setInputs(currentInputs => ({
            ...currentInputs,
            [e.target.name]: e.target.value
        }))
    };

    const _getLoginData = () => ({
        email: inputs.email,
        password: inputs.password
    })

    const handleOnLogin = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        handleLogin(_getLoginData())
    }

    if (logged) {
        return <Redirect to="/movie-bob/" />
    }

    return (
        <form onSubmit={handleOnLogin}>
            <div className="form-group">
                <label>Email address
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={inputs.email} name="email" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label>Password
                    <input type="password" className="form-control" placeholder="Password" value={inputs.password} name="password" onChange={handleChange} />
                </label>
            </div>
            <button type="submit" className="btn btn-primary">LOGIN</button>
            <br />
            <Link to={'/movie-bob/registration'}>REGISTER HERE</Link>
            {authError && <p className="text-danger">{authError.message}</p>}
        </form>
    )
}

const mapStateToProps = (state: any) => ({
    logged: state.userReducer.logged,
    authError: state.userReducer.authError
})

const mapDispatchToProps = {
    handleLogin: onLoginRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
