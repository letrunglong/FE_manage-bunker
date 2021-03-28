import React, { Component } from 'react';

class StaticImport extends Component {
    render() {
        return (
            <div className='statistical'>
                <span>Tổng số phiếu nhập: <span style={{ color: 'red' }}>{this.props.totalBill} </span></span>
                <span>Tổng tiền: <span style={{ color: 'red' }}>{this.props.totalMoney} </span></span>
                <span>Tổng nợ: <span style={{ color: 'red' }}>{this.props.totalDebt} </span></span>
            </div>
        );
    }
}

export default StaticImport;