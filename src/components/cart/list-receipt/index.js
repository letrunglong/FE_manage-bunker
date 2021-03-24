import React, { Component } from 'react';
import { Table, Tag} from 'antd';

const columns = [
    {
        title: 'Mã đơn hàng',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Kho xuất',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Ngày bán',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Trạng thái',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    // {
    //     title: 'Khách hàng',
    //     key: 'action',
    //     render: (text, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
    {
        title: 'Khách hàng',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tổng tiền',
        dataIndex: 'total',
        key: 'total',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        total: '$1000',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
        total: '$1000',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        total: '$1000',
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        total: '$1000',
    },
    {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        total: '$1000',
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        total: '$1000',
    },
];
class ListReceipt extends Component {
    render() {
        return (
            <div className='list-receipt'>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default ListReceipt;