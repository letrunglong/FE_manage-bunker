import React, { Component } from 'react';

class StatisticalCart extends Component {
    render() {
        return (
            <div className='statistical'>
                <span>Tổng số hóa đơn: <span style={{color:"red"}}>{this.props.billTotal}</span>,</span>
                <span> Tổng tiền: <span style={{color:"red"}}>{this.props.moneyTotal}</span>,</span>
                <span> Tổng nợ: <span style={{color:"red"}}>{this.props.oweTotal}</span></span>
            </div>
        );
    }
}

export default StatisticalCart;