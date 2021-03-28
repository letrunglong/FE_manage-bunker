import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import SearchOnImport from './component/search';
import './styles.scss'
import ContentImport from './component/content';
import StaticImport from './component/statics';
class ImportProduct extends Component {
    render() {
        return (
            <div className='component import-product products'>
                <div className='outside'>
                    <div className='title'>Danh sách phiếu nhập</div>
                    <div className='title btn-add'>
                        <PlusOutlined />
                        <span>Thêm phiếu nhập</span>
                    </div>
                </div>
                <SearchOnImport />
                <ContentImport />
                <StaticImport totalBill={0} totalMoney={0} totalDebt={0} />
            </div>
        );
    }
}

export default ImportProduct;