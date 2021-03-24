import React, { Component } from 'react';
import {  SearchOutlined } from '@ant-design/icons';
import { Input, DatePicker, Button } from 'antd';
const { RangePicker } = DatePicker;
class SearchProduct extends Component {
    render() {
        return (
            <div className='search-product'>
                <div className='left'>
                    <div className='find-by-code mr' >
                        <Input placeholder='Nhập mã đơn hàng để tìm kiếm' />
                    </div>
                    <div className='sort-by-receipt mr'>
                        <Input placeholder='Đơn hàng' type="number" />
                    </div>

                    <div className='search-by-date mr'>
                        <RangePicker />
                    </div>
                    <div className='btn-search'>
                        <Button type="primary"><SearchOutlined /><span>Tìm kiếm</span></Button>
                    </div>
                </div>
                <div className='right'>
                    <Button className='sort-time'>Tuần</Button>
                    <Button className='sort-time'>Tháng</Button>
                    <Button className='sort-time'>Quý</Button>
                </div>
            </div>
        );
    }
}

export default SearchProduct;