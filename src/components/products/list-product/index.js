import React, { Component } from 'react';
import { Image, Table } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';

const columns = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'prod_name',
        key: 'prod_name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Mã sản phẩm',
        dataIndex: 'prod_id',
        key: 'prod_id',
    },
    {
        title: 'SL',
        dataIndex: 'prod_quantity',
        key: 'prod_quantity',
    },
    {
        title: 'Giá bán',
        key: 'prod_price',
        dataIndex: 'prod_price',
    },
    {
        title: 'Danh mục',
        dataIndex: 'cate_name',
        key: 'prod_cate',
    },
    {
        title: 'Nhà sản xuất',
        dataIndex: 'producer_name',
        key: 'prod_producer',
    },
    {
        title: 'Đơn vị tính',
        dataIndex: 'unit_name',
        key: 'prod_unit',
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'prod_image',
        key: 'prod_image',
        render: prod_image => {
            const url = "http://localhost:4000/products-image/" + prod_image
            return <Image src={url} style={{ height: '50px',width:'100px' }} />
        }
    },
];
class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }
    }
    componentWillMount() {
        if (localStorage.getItem('token')) {
            axios({
                method: "GET",
                url: '/getProducts'
            }).then(res => {
                console.log(res.data);
                this.setState({
                    data: res.data
                })
            }
            )
        }
    }
    render() {
        return (
            <div className='content'>
                <Table columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
}
export default connect()(ProductsList)
