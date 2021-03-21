import React, { Component } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';
class ProductBeFault extends Component {
    render() {
        return (
            <div className='product-be-fault statistical'>
                <div className='top'>
                    <div className='left'>
                    <Image src={this.props.imageLink}/>
                    </div>
                    <div className='right'>
                        <span>0/0</span>
                        <span>Hàng đổi trả/ Số lượng</span>
                    </div>
                </div>
                <div className='bottom'>
                    <span>Xem thêm</span>
                    <span><RightCircleOutlined /></span>
                </div>

            </div>
        );
    }
}

export default ProductBeFault;