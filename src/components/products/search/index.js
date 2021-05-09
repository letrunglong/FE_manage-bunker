import React, { Component } from 'react';
import { Menu, Dropdown, Button, Space, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import store from 'components/redux/store';
import { TYPES } from 'components/redux/constants';

const getProductsByCate = (val) => {
    axios({
        method:"POST",
        url:'/get-products-by-cate/'+ val ,
    }).then( res=>{
        store.dispatch({
            type:TYPES.GET_ALL_PRODUCTS,data:res.data
        })
    })
}
const getProductsByProducer = (val) => {
    axios({
        method:"POST",
        url:'/get-products-by-producer/'+ val ,
    }).then( res=>{
        store.dispatch({
            type:TYPES.GET_ALL_PRODUCTS,data:res.data
        })
    })
}
const menuCate = (props) => {
    const renderCate = () => {
        return props.cateData.map((val, index) => {
            const value = val.cate_id
            return <Menu.Item onClick={()=>getProductsByCate(value)}>
                <a key={val.cate_id}>{val.cate_name}</a></Menu.Item>
        })
    }
    return <Menu>
        {renderCate()}
    </Menu>
}


const menuProducer = (props) => {
    const renderProducer = () => {
        return props.producerData.map((val, index) => {
            const value = val.producer_id
            return <Menu.Item onClick={()=>getProductsByProducer(value)}><a key={val.producer_id}>{val.producer_name}</a></Menu.Item>
        })
    }
    return <Menu>
        {renderProducer()}
    </Menu>
}



class SearchOnProduct extends Component {
    dropDown = (cate) => {
        switch (cate) {
            case "Danh Mục":
                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown overlay={menuCate(this.props)} placement="bottomLeft">
                            <Button>Danh mục</Button>
                        </Dropdown>
                    </Space>
                </Space>
                break;
            case "Nhà sản xuất":
                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown overlay={menuProducer(this.props)} placement="bottomLeft">
                            <Button>{cate}</Button>
                        </Dropdown>
                    </Space>
                </Space>
                break;
            default:
                break;
        }
        return
    }
    render() {
        return (
            <div className='search'>
                <div className='search-by-code-or-name child'>
                    <Input placeholder='Nhập mã sản phẩm hoặc tên sản phẩm' />
                </div>
                <div className='search-by-count child'>
                    <Input placeholder='Đang kinh doanh' type="number" />
                </div>
                <div className='search-by-cate child'>
                    <Space direction="vertical">
                        <Space wrap>
                            <Dropdown overlay={menuCate(this.props)} placement="bottomLeft">
                                <Button>Danh mục</Button>
                            </Dropdown>
                        </Space>
                    </Space>
                </div>
                <div className='search-by-owner child'>
                    <Space direction="vertical">
                        <Space wrap>
                            <Dropdown overlay={menuProducer(this.props)} placement="bottomLeft">
                                <Button>Nhà sản xuất</Button>
                            </Dropdown>
                        </Space>
                    </Space>
                </div>
                <div className='search-btn'>
                    <Button type="primary"><SearchOutlined />Tìm kiếm</Button>
                </div>
            </div>
        );
    }
}

export default SearchOnProduct;