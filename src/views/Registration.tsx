import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onRegistrationRequest } from '../action/actions'
import { BaseCredentials } from '../types/authTypes'
import { Redirect } from 'react-router-dom'

type RegistrationState = {
    email: string,
    password: string,
    passwordConfirm: string,
    localFormError: string | null,
}

type RegistrationProps = {
    handleRegistration: (registrationData: BaseCredentials) => any,
    logged: Boolean,
    authError: any
}

class Registration extends Component<RegistrationProps, RegistrationState> {
    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        localFormError: null
    }

    _getRegistrationData() {
        return {
            email: this.state.email,
            password: this.state.password
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as { [P in keyof RegistrationState]: RegistrationState[P] });
    }

    handleRegistration = (): void => {
        this.setState({ localFormError: null });

        if (this.state.password !== this.state.passwordConfirm) {
            this.setState({ localFormError: 'Passwords dont match.' })
            return;
        }

        this.props.handleRegistration(this._getRegistrationData())
    }

    render(): JSX.Element {
        if (this.props.logged) {
            return <Redirect to="/movie-bob/" />
        }

        return (
            <div>
                Registration
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
                <label>
                    CONFIRM PASSWORD
                    <input type="text" value={this.state.passwordConfirm} name="passwordConfirm" onChange={this.handleChange} />
                </label>
                <br />
                <button onClick={this.handleRegistration}>
                    Registration
                </button>
                {this.props.authError && <p className="red">{this.props.authError.message}</p>}
                {this.state.localFormError && <p className="red">{this.state.localFormError}</p>}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    logged: state.userReducer.logged,
    authError: state.userReducer.authError
})

const mapDispatchToProps = {
    handleRegistration: onRegistrationRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
