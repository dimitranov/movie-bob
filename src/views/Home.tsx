import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../store/store';

type StateProps = {

}

type DispatchProps = {

}

class Home extends Component<StateProps & DispatchProps, {}> {
    render() {
        return (
            <div className="page-container">
                <br />
                HOME
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({

});

const mapDispatchToProps = (dispatch: Function) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
