import React, { Component } from 'react';
import { Input, Table, Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
class Search extends Component {
    render() {
        return (
            <div className='search-customer'>
                <div className='search-name'>
                    <Input placeholder='Nhập tên, mã hoặc SĐT khách hàng'/>
                </div>
                <div className='search-all'>
                    <Input placeholder='tất cả' type="number"/>
                </div>
                <div className='btn-search'>
                <Button type="primary"><SearchOutlined />Tìm kiếm</Button>
                </div>
            </div>
        );
    }
}

const columns = [
    {
        title: 'Mã KH',
        dataIndex: 'code',
        key: 'code',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Tên KH',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Nhóm',
        dataIndex: 'groups',
        key: 'groups',
    },
    {
        title: 'Điện thoại',
        key: 'phone',
        dataIndex: 'phone',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Lần cuối mua hàng',
        dataIndex: 'lasted',
        key: 'lasted',
    },
    {
        title: 'Tổng tiền hàng',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Nợ',
        dataIndex: 'debt',
        key: 'debt',
    },
];

const data = [
    {
        key: '1',
        code: '187738732',
        name: 'Ngu Văn Ngục',
        groups: 'A',
        address: 'TDM, Bình Dương',
        lasted: 'Thứ Tư, 24 tháng 3, 2021',
        phone: '012345678',
        total: '$15000',
        debt: '$1500',
    },
    {
        key: '1',
        code: '187738732',
        name: 'Ngu Văn Ngục',
        groups: 'A',
        address: 'TDM, Bình Dương',
        lasted: 'Thứ Tư, 24 tháng 3, 2021',
        phone: '012345678',
        total: '$15000',
        debt: '$1500',
    },
    {
        key: '1',
        code: '187738732',
        name: 'Ngu Văn Ngục',
        groups: 'A',
        address: 'TDM, Bình Dương',
        lasted: 'Thứ Tư, 24 tháng 3, 2021',
        phone: '012345678',
        total: '$15000',
        debt: '$1500',
    },
    {
        key: '1',
        code: '187738732',
        name: 'Ngu Văn Ngục',
        groups: 'A',
        address: 'TDM, Bình Dương',
        lasted: 'Thứ Tư, 24 tháng 3, 2021',
        phone: '012345678',
        total: '$15000',
        debt: '$1500',
    },
    {
        key: '1',
        code: '187738732',
        name: 'Ngu Văn Ngục',
        groups: 'A',
        address: 'TDM, Bình Dương',
        lasted: 'Thứ Tư, 24 tháng 3, 2021',
        phone: '012345678',
        total: '$15000',
        debt: '$1500',
    },
];
class CustomerTab extends Component {
    render() {
        return (
            <div className='content customer-tab'>
                <Search/>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default CustomerTab;