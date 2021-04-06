import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import SearchOnImport from './component/search';
import './styles.scss'
import ContentImport from './component/content';
import StaticImport from './component/statics';
import { Button } from 'antd';
class ImportProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }
    renderComponent = () => {
        if (this.state.isShow)
            return <>
                <SearchOnImport />
                <ContentImport />
                <StaticImport totalBill={0} totalMoney={0} totalDebt={0} />
            </>
        return null
    }
    render() {
        return (
            <div className='component import-product products'>
                <div className='outside'>
                    <div className='title'>Danh sách phiếu nhập</div>
                    <Button className='title btn-add' onClick={() => { this.setState({ isShow: !this.state.isShow }) }}>
                        <PlusOutlined />
                        <span>Thêm phiếu nhập</span>
                    </Button>
                </div>
                {this.renderComponent()}

            </div>
        );
    }
}

export default ImportProduct;