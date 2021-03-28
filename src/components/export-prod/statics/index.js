import React, { Component } from 'react';

class StaticExport extends Component {
    render() {
        return (
            <div className='statistical'>
                <span>Tổng số phiếu: <span style={{ color: 'red' }}>{this.props.totalBill} </span></span>
                <span>Đang chuyển: <span style={{ color: 'red' }}>{this.props.totalMoney} </span></span>
                <span>Hoàn thành: <span style={{ color: 'red' }}>{this.props.totalDebt} </span></span>
            </div>
        );
    }
}

export default StaticExport;