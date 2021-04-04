import React, { Component } from 'react';
import { Button, Image, Table } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import store from 'components/redux/store';
import { TYPES } from 'components/redux/constants';
const deleteProduct = (id) => {
    store.dispatch({
        type: TYPES.DELETE_PRODUCTS,
        id
    })
}
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
        title: 'Giá nhập',
        key: 'prod_price',
        dataIndex: 'prod_price',
    },
    {
        title: 'Giá bán',
        dataIndex: 'price_sell',
        key: 'price_sell',
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
            return <Image src={url} style={{ height: '50px', width: '100px' }} />
        }
    },
    {
        title: 'Tuỳ chọn',
        dataIndex: 'prod_id',
        key: 'prod_id',
        render: prod_id => {
            return <>
                <Button style={{ marginRight: 5 }} key={1} onClick={() => { }} disabled>Sửa</Button>
                <Button type="primary" key={2} onClick={() => {
                    deleteProduct(prod_id)
                }} danger>Xóa</Button>
            </>
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

const mapStateToProps = (state) => {
    return {
        dataprod: state.getProducts.data
    }
}
export default connect(mapStateToProps)(ProductsList)
