import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { clearAuthError, onRegistrationRequest } from '../action/actions'
import { BaseCredentials } from '../types/authTypes'
import { Redirect, Link } from 'react-router-dom'
import { BaseAction } from '../types/actionTypes'

export type AuthInputFields = {
    email: string,
    password: string,
    passwordConfirm?: string,
}

export const initialInputValues = {
    email: '',
    password: '',
    passwordConfirm: ''
};

type RegistrationProps = {
    handleRegistration: (registrationData: BaseCredentials) => any,
    handleClearAuthError: () => BaseAction,
    logged: Boolean,
    authError: any
}

const Registration2 = (props: RegistrationProps) => {
    const [inputs, setInputs] = useState<AuthInputFields>(initialInputValues);
    const [localFormError, setLocalFormEvent] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setInputs(currentInputs => ({
            ...currentInputs,
            [e.target.name]: e.target.value
        }))
    };

    const _getRegistrationData = () => ({
        email: inputs.email,
        password: inputs.password
    })

    const handleRegistration = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        setLocalFormEvent(null);

        // if (inputs.password !== inputs.passwordConfirm) {
        //     setLocalFormEvent('Passwords dont match.');
        //     return;
        // }

        props.handleRegistration(_getRegistrationData())
    }

    useEffect(() => {
        return () => {
            if (props.authError) {
                props.handleClearAuthError();
            }
        }
    })


    if (props.logged) {
        return <Redirect to="/movie-bob/" />
    }

    return (
        <form onSubmit={handleRegistration}>
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
            <div className="form-group">
                <label>Password
                    <input type="text" className="form-control" placeholder="Confirm Password" value={inputs.passwordConfirm} name="passwordConfirm" onChange={handleChange} />
                </label>
            </div>
            <button type="submit" className="btn btn-primary">REGISTER</button>
            <br />
            <Link to={'/movie-bob/login'}>Login</Link>
            {props.authError && <p className="text-danger">{props.authError.message}</p>}
            {localFormError && <p className="text-danger">{localFormError}</p>}
        </form>
    )
};


const mapStateToProps = (state: any) => ({
    logged: state.userReducer.logged,
    authError: state.userReducer.authError
})

const mapDispatchToProps = {
    handleRegistration: onRegistrationRequest,
    handleClearAuthError: clearAuthError
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration2)
