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

        const authLink = this.props.userIsLogged ?
            <button onClick={this._handleLogout}>LOGOUT</button> :
            <Link to="/movie-bob/login" className="btn btn-primary">LOGIN</Link>

        return (
            <header className="px-3 py-2">
                <div className="header-item header-item-home-link">
                    <Link to="/movie-bob/">HOME</Link>
                </div>
                <div className="header-item header-item-search-bar">
                    <SearchBar
                        onSearchTypeChange={this.props.onSearchTypeChange}
                        onSearchValueChange={this.props.onSearchValueChange}
                        searchValue={this.props.searchValue}
                        searchType={this.props.searchType}
                    />
                </div>
                <div className="header-item header-item-auth-link">
                    {authLink}
                </div>
                <div className="clearfix"></div>
            </header>
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
