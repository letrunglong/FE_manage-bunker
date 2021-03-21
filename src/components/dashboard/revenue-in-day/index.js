import React, { Component } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';


class RevenueOfTheDay extends Component {
    render() {
        return (
            <div className='revenue statistical'>
                <div className='top'>
                    <div className='left'>
                        <Image src={this.props.imageLink}/>
                    </div>
                    <div className='right'>
                        <span>0</span>
                        <span>Doanh thu</span>
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

export { RevenueOfTheDay }