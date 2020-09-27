import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../store/store'
import { Link } from 'react-router-dom'
import { onSearchTypeChange, onSearchValueChange, onLogoutRequest } from '../action/actions'
import { SearchBar } from '../components/SearchBar'
import { BaseAction } from '../types/actionTypes'

type StateProps = {
    userIsLogged: Boolean,
    searchValue: string,
    searchType: string
}

type DispathProps = {
    onSearchValueChange: (value: string) => BaseAction,
    onSearchTypeChange: (type: string) => BaseAction
    onLogoutRequest: () => BaseAction
}

class Header extends Component<StateProps & DispathProps, {}> {

    _handleLogout: () => void = () => {
        this.props.onLogoutRequest();
    }

    render() {
        return (
            <div>
                <Link to="/movie-bob/">HOME</Link>
                <SearchBar
                    onSearchTypeChange={this.props.onSearchTypeChange}
                    onSearchValueChange={this.props.onSearchValueChange}
                    searchValue={this.props.searchValue}
                    searchType={this.props.searchType}
                />
                {
                    this.props.userIsLogged ?
                        <span onClick={this._handleLogout}>LOGOUT</span> :
                        <Link to="/movie-bob/login">LOGIN</Link>
                }
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    searchValue: state.searchReducer.value,
    searchType: state.searchReducer.type,
    userIsLogged: state.userReducer.logged
})

const mapDispatchToProps = {
    onSearchTypeChange,
    onSearchValueChange,
    onLogoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
