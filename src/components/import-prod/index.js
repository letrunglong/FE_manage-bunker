import React, { Component } from 'react';
import { PlusOutlined, RollbackOutlined } from '@ant-design/icons';
import SearchOnImport from './component/search';
import './styles.scss'
import ContentImport from './component/content';
import StaticImport from './component/statics';
import { Button } from 'antd';
import AddBillImportComponent from 'components/import-prod/component/add-bills'
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
        return <AddBillImportComponent />
    }
    renderTextButton = () => {
        if (this.state.isShow)
            return <><PlusOutlined />
                <span>Thêm phiếu nhập</span></>
        return <><RollbackOutlined /><span>Trở về</span></>

    }
    render() {
        return (
            <div className='component import-product products'>
                <div className='outside'>
                    <div className='title'>Danh sách phiếu nhập</div>
                    <Button className='title btn-add' onClick={() => { this.setState({ isShow: !this.state.isShow }) }}>
                        {this.renderTextButton()}
                    </Button>
                </div>
                <div className='content'>
                    {this.renderComponent()}
                </div>

            </div>
        );
    }
}

export default ImportProduct;