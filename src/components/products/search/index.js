import React, { Component } from 'react';
import { Menu, Dropdown, Button, Space, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
      </a>
        </Menu.Item>
    </Menu>
);
class SearchOnProduct extends Component {
    dropDown = (cate) => {
        return <Space direction="vertical">
            <Space wrap>
                <Dropdown overlay={menu} placement="bottomLeft">
                    <Button>{cate}</Button>
                </Dropdown>
            </Space>
        </Space>
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
                    {this.dropDown("Danh Mục")}
                </div>
                <div className='search-by-owner child'>
                    {this.dropDown("Nhà sản xuất")}
                </div>
                <div className='search-btn'>
                    <Button type="primary"><SearchOutlined />Tìm kiếm</Button>
                </div>
            </div>
        );
    }
}

export default SearchOnProduct;