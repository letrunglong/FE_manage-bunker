import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './styles.scss'
import SearchOnProduct from './search'
import ProductsList from './list-product';

class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddProduct: false
        }
    }
    renderItems = () => {
        if (this.state.isAddProduct)
            return <span>Add product component</span>
        return <>
            <SearchOnProduct />
            <ProductsList />
        </>
    }
    render() {
        return (
            <div className='component products'>
                <div className='outside'>
                    <div className='title'>Danh sách sản phẩm</div>
                    <div className='title btn-add' onClick={() => this.setState({ isAddProduct: !this.state.isAddProduct })}>
                        <PlusOutlined />
                        <span>Thêm sản phẩm</span>
                    </div>
                </div>
                {
                    this.renderItems()
                }
            </div>
        );
    }
}

export default ProductComponent;