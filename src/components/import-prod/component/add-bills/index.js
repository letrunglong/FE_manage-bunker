import { Button, DatePicker, Image, Input, Select, Table } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
const { Option } = Select
const columns = [
    {
        title: 'STT',
        dataIndex: 'prod_name',
        key: 'prod_name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'prod_name',
        key: 'prod_name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Mã sản phẩm',
        dataIndex: 'prod_id',
        key: 'prod_id',
    },
    {
        title: 'SL',
        dataIndex: 'prod_quantity',
        key: 'prod_quantity',
        render: (value) => {
            return <Input type="number" placeholder="nhập số lượng" />
        }
    },
    {
        title: 'Giá nhập',
        key: 'prod_price',
        dataIndex: 'prod_price',
    },
    {
        title: 'Đơn vị tính',
        dataIndex: 'unit_name',
        key: 'prod_unit',
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'prod_image',
        key: 'prod_image',
        render: prod_image => {
            const url = "http://localhost:4000/products-image/" + prod_image
            return <Image src={url} style={{ height: '50px', width: '100px' }} />
        }
    },
    {
        title: 'Thành tiền',
        dataIndex: 'unit_price',
        key: 'prod_price',
    },
    {
        title: 'Tuỳ chọn',
        dataIndex: '',
        key: '',
        render: (data) => {
            return <>
                <Button type="primary" key={2}
                    //  onClick={() => {
                    // let prod = {}
                    // prod.id = data.prod_id
                    // prod.image = data.prod_image
                    // deleteProduct(prod)
                    // }} 
                    danger>Xóa</Button>
            </>
        }
    },
];
class AddBillImportComponent extends Component {
    render() {
        return (
            <div className='add-bill'>
                <div className="left">
                    <div className='search'>
                        <Select showSearch placeholder="Chọn nhà sản xuất" style={{ width: "100%" }}>
                            <Select.Option key='1' value="abc">abc</Select.Option>
                            <Select.Option key='2' value="abcd">abcd</Select.Option>
                        </Select>
                    </div>
                    <div className='table-product'>
                        <Table columns={columns} />
                    </div>
                </div>
                <div className="right">
                    <div className='top'>
                        <div className='child suplier'>
                            <div className='text-title'>Nhà cung cấp</div>
                            <div className='input-title'>
                                <Select>
                                    <Option>1</Option>
                                    <Option>2</Option>
                                </Select>
                                <Button icon={<PlusOutlined />}></Button>
                            </div>
                        </div>
                        <div className='child date'>
                            <div className='text-title'>Ngày nhập</div>
                            <div className='input-title'>
                                <DatePicker />
                            </div>
                        </div>
                        <div className='child owner'>
                            <div className='text-title'>Người nhập</div>
                            <div className='input-title'>
                                <span>admin</span>
                            </div>
                        </div>
                        <div className='child details'>
                            <div className='text-title'>Ghi chú</div>
                            <div className='input-title'>
                                <TextArea />
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='infor-title'>
                            <span><InfoCircleOutlined /><span>Thông tin thanh toán</span></span>
                        </div>
                        <div className='content'>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(AddBillImportComponent)