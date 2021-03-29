import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, AlertContainer } from "react-bs-notifier";
import { TYPES } from 'components/redux/constants';
class Notificate extends Component {
    handleDismiss = () => {
        this.props.alertOff()
    }
    checkAlert = () => {
        if (this.props.alertStatus) {
            return <Alert type="success" headline="Alert!" timeout={1000} onDismiss={()=>this.handleDismiss()}>{this.props.messages}</Alert>
        } else return
    }
    render() {
        return (
            <div className='notifier'>
                <AlertContainer>
                    {this.checkAlert()}
                </AlertContainer>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.alertReducer.messages,
        alertStatus: state.alertReducer.alertStatus,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({ type: TYPES.ALERT_NOTIFIER_OFF })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notificate)