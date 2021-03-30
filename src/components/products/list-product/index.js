import React, { Component } from 'react';
import { Image, Table } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';

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
        key: 'cate_name',
    },
    {
        title: 'Nhà sản xuất',
        dataIndex: 'prod_producer',
        key: 'prod_producer',
    },
    {
        title: 'Đơn vị tính',
        dataIndex: 'prod_unit',
        key: 'prod_unit',
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'prod_image',
        key: 'prod_image',
        render: prod_image=>{
            return <Image src={prod_image} style={{width:'100px'}}/>
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
                this.setState({
                    data:res.data
                })
            }
            )
        } else {
            console.log("can't get products");
        }
    }
    renderProducts = () => {

    }
    render() {
        console.log(this.state.data);
        return (
            <div className='content'>
                <Table columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
}
export default connect()(ProductsList)
