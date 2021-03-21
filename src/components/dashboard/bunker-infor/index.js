import React, { Component } from 'react';
import { SignalFilled } from '@ant-design/icons';
class BunkerInfor extends Component {
    render() {
        return (
            <div className='bunker-infor statistical-bottom'>
                <div className='title'>
                    <SignalFilled />
                    <span>Thông tin kho</span>
                </div>
                <div className='content'>
                    <div className='parent'>
                        <span>Tồn kho</span>
                        <span>{this.props.sold}</span>
                    </div>
                    <div className='parent'>
                        <span>Hết hàng</span>
                        <span>{this.props.billSold}</span>
                    </div>
                    <div className='parent'>
                        <span>Sắp hết hàng</span>
                        <span>{this.props.billCount}</span>
                    </div>
                    <div className='parent'>
                        <span>Vượt định mức</span>
                        <span>{this.props.payForStock}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BunkerInfor;