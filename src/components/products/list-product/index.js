import React, { Component } from 'react';
import { Table} from 'antd';

const columns = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Mã sản phẩm',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'SL',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Giá bán',
        key: 'price',
        dataIndex: 'price',
    },
    {
        title: 'Danh mục',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Nhà sản xuất',
        dataIndex: 'total',
        key: 'total',
    },
];

const data = [
    {
        key: '1',
        name: 'Nike Dunk Low',
        age: 32123123123,
        address: 100,
        category: 'Nike Dunk',
        total: 'Nike, Inc.',
        price: '$1500',
    },
    {
        key: '1',
        name: 'Nike Dunk Low',
        age: 32123123123,
        address: 100,
        category: 'Nike Dunk',
        total: 'Nike, Inc.',
        price: '$1500',
    },
    {
        key: '1',
        name: 'Nike Dunk Low',
        age: 32123123123,
        address: 100,
        category: 'Nike Dunk',
        total: 'Nike, Inc.',
        price: '$1500',
    },
    {
        key: '1',
        name: 'Nike Dunk Low',
        age: 32123123123,
        address: 100,
        category: 'Nike Dunk',
        total: 'Nike, Inc.',
        price: '$1500',
    },
    {
        key: '1',
        name: 'Nike Dunk Low',
        age: 32123123123,
        address: 100,
        category: 'Nike Dunk',
        total: 'Nike, Inc.',
        price: '$1500',
    },
    {
        key: '1',
        name: 'Nike Dunk Low',
        age: 32123123123,
        address: 100,
        category: 'Nike Dunk',
        total: 'Nike, Inc.',
        price: '$1500',
    },
];
class ProductsList extends Component {
    render() {
        return (
            <div className='content'>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default ProductsList;