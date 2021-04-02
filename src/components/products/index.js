import React, { Component } from 'react';
import { PlusOutlined, RollbackOutlined } from '@ant-design/icons';
import './styles.scss'
import SearchOnProduct from './search'
import ProductsList from './list-product';
import { Button } from 'antd';
import AddNewproducts from './add-product';

class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddProduct: false
        }
    }
    renderItems = () => {
        if (this.state.isAddProduct)
            return <AddNewproducts />
        return <>
            <SearchOnProduct />
            <ProductsList />
        </>
    }
    renderTextButton = () => {
        if (this.state.isAddProduct)
            return <><RollbackOutlined /><span>Trở về</span></>
        return <><PlusOutlined />
            <span>Thêm sản phẩm</span></>
    }
    render() {
        return (
            <div className='component products'>
                <div className='outside'>
                    <div className='title'>Danh sách sản phẩm</div>
                    <Button type="primary" className='title btn-add' onClick={() => this.setState({ isAddProduct: !this.state.isAddProduct })}>
                        {this.renderTextButton()}
                    </Button>
                </div>
                {
                    this.renderItems()
                }
            </div>
        );
    }
}

export default ProductComponent;