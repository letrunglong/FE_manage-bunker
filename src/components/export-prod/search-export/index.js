import React, { Component } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, DatePicker, Button } from 'antd';
const { RangePicker } = DatePicker;
class SearchOnExport extends Component {
    render() {
        return (
            <div className='search-import'>
                <div className='left'>
                    <div className='search-by-code'>
                        <Input placeholder='Nhập mã phiếu để tìm kiếm' />
                    </div>
                    <div className='search-by-name'>
                        <Input type="number" placeholder='Nhập mã phiếu để tìm kiếm' />
                    </div>
                    <div className='search-by-date'>
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

export default SearchOnExport;