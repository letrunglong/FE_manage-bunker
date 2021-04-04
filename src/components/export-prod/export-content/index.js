import React, { Component } from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Mã phiếu nhập',
        dataIndex: 'code',
        key: 'code',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Kho nhập',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Tình trạng',
        dataIndex: 'groups',
        key: 'groups',
    },
    {
        title: 'Ngày nhập',
        key: 'phone',
        dataIndex: 'phone',
    },
    {
        title: 'Người nhập',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tổng tiền',
        dataIndex: 'lasted',
        key: 'lasted',
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
];
class ContentExport extends Component {
    render() {
        return (
            <div className='import-content'>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default ContentExport;