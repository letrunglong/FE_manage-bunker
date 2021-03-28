import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import SearchOnExport from './search-export';
import ContentExport from './export-content';
import StaticExport from './statics';
class ExportProduct extends Component {
    render() {
        return (
            <div className='component export-product import-product products'>
                <div className='outside'>
                    <div className='title'>Danh sách phiếu chuyển kho</div>
                    <div className='title btn-add'>
                        <PlusOutlined />
                        <span>Chuyển kho</span>
                    </div>
                </div>
                <SearchOnExport/>
                <ContentExport/>
                <StaticExport totalBill ={0} totalMoney={0} totalDebt={0}/>
            </div>
        );
    }
}

export default ExportProduct;