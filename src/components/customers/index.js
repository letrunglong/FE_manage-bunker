import React, { Component } from 'react';
import { PlusOutlined} from '@ant-design/icons';
import { Tabs } from 'antd';
import CustomerTab from './customer-tab';
import './styles.scss'
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}
class CustomersComponent extends Component {
    render() {
        return (
            <div className='component customers products'>
                <div className='outside'>
                    <div className='title'>Khách hàng</div>
                    <div className='title btn-add'>
                        <PlusOutlined />
                        <span>Thêm khách hàng</span>
                    </div>
                </div>
                <div className='tab-nav'>
                    <Tabs onChange={callback} type="card">
                        <TabPane tab="Khách hàng" key="1">
                            <CustomerTab/>
                        </TabPane>
                        <TabPane tab="Nhóm khách" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Nhà cung cấp" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default CustomersComponent;