import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './styles.scss'
import SearchOnProduct from './search'
import ProductsList from './list-product';

class ProductComponent extends Component {

    render() {
        return (
            <div className='component products'>
                <div className='outside'>
                    <div className='title'>Danh sách sản phẩm</div>
                    <div className='title btn-add'>
                        <PlusOutlined />
                        <span>Thêm sản phẩm</span>
                    </div>
                </div>
                <SearchOnProduct />
                <ProductsList/>
            </div>
        );
    }
}

export default ProductComponent;