import React, { Component } from 'react';
import { SignalFilled } from '@ant-design/icons';
class ActivitiesOfTheDay extends Component {
    render() {
        return (
            <div className='activities statistical-bottom border-radius-5'>
                <div className='title'>
                    <SignalFilled />
                    <span>Hoạt động</span>
                </div>
                <div className='content'>
                    <div className='parent'>
                        <span>Tiền bán hàng</span>
                        <span>{this.props.sold}</span>
                    </div>
                    <div className='parent'>
                        <span>Đơn bán / đơn trả</span>
                        <span>{this.props.billSold}</span>
                    </div>
                    <div className='parent'>
                        <span>SL bán / SL trả</span>
                        <span>{this.props.billCount}</span>
                    </div>
                    <div className='parent'>
                        <span>Tiền trả hàng</span>
                        <span>{this.props.payForStock}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivitiesOfTheDay;