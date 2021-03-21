import React, { Component } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';
class OrderAmount extends Component {
    render() {
        return (
            <div className='order-amount statistical'>
                <div className='top'>
                    <div className='left'>
                    <Image src={this.props.imageLink}/>
                    </div>
                    <div className='right'>
                        <span>0/0</span>
                        <span>Số đơn hàng/ Số lượng</span>
                    </div>
                </div>
                <div className='bottom'>
                    <span>Xem thêm</span>
                    <span><RightCircleOutlined/></span>
                </div>

            </div>
        );
    }
}

export default OrderAmount;