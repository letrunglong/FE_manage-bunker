import React, { Component } from 'react';
import { SignalFilled } from '@ant-design/icons';
class ProductInfor extends Component {
    render() {
        return (
            <div className='product-infor statistical-bottom'>
                <div className='title'>
                    <SignalFilled />
                    <span>Thông tin sản phẩm</span>
                </div>
                <div className='content'>
                    <div className='parent'>
                        <span>Sản phẩm/ Nhà sản xuất</span>
                        <span>{this.props.sold}</span>
                    </div>
                    <div className='parent'>
                        <span>Chưa làm giá bán</span>
                        <span>{this.props.billSold}</span>
                    </div>
                    <div className='parent'>
                        <span>Chưa nhập giá mua</span>
                        <span>{this.props.billCount}</span>
                    </div>
                    <div className='parent'>
                        <span>Hàng chưa phân loại</span>
                        <span>{this.props.payForStock}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductInfor;