import { Button, Input, Form, Select, Upload, Image } from 'antd';

import axios from 'axios';
import { TYPES } from 'components/redux/constants';
import addProducts from 'components/redux/reducers/all/addProduct';
import store from 'components/redux/store';
import React, { Component } from 'react';
import ListAddFromProduct from './btn-list';
const { Option } = Select;
const axiosClient = (link, method, data) => {
    return axios({
        method: `${method}`,
        url: `${link}`,
        data: `${data}`
    })
}
class AddNewproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cateData: [],
            unitData: [],
            bunkerData: [],
            producerData: [],
            selectedFile: null,
            srcImg: '',
            product_image: null,
        }
    }
    componentWillMount() {
        if (localStorage.getItem('token')) {
            axiosClient('/get-categories', "GET").then(res => {
                this.setState({
                    cateData: res.data
                })
            })
            axiosClient('/get-unit', "GET").then(res => {
                this.setState({
                    unitData: res.data
                })
            })
            axiosClient('/get-bunker', "GET").then(res => {
                this.setState({
                    bunkerData: res.data
                })
            })
            axiosClient('/get-producer', "GET").then(res => {
                this.setState({
                    producerData: res.data
                })
            })
            // axiosClient('/products/images', "GET").then(res => console.log(res))
        }
    }
    onFinish = () => {
        let { product_name, product_bunker, product_cate, product_price, product_producer, product_quantity, product_unit } = this.state
        const fd = new FormData()
        fd.append('image', this.state.product_image,this.state.product_image.name)
        fd.append('product_name', product_name)
        fd.append('product_bunker', product_bunker)
        fd.append('product_cate', product_cate)
        fd.append('product_price', product_price)
        fd.append('product_producer', product_producer)
        fd.append('product_quantity', product_quantity)
        fd.append('product_unit', product_unit)
        fd.append('product_image', this.state.product_image.name)
        axios({
            method: "POST",
            url: "/add-products",
            headers: { "Content-Type": "multipart/form-data" },
            data: fd
        }).then(res => {
            store.dispatch({type:TYPES.ALERT_NOTIFIER_ON,messages:res.data.messages})
        }).catch(err=>{store.dispatch({type:TYPES.ALERT_NOTIFIER_ON,messages:"Không có phản hồi từ máy chủ"})})
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    renderCate = () => {
        return this.state.cateData.map((val, key) => {
            return <Option value={val.cate_id}>{val.cate_name}</Option>
        })
    }
    renderUnit = () => {
        return this.state.unitData.map((val, key) => {
            return <Option value={val.unit_id}>{val.unit_name}</Option>
        })
    }
    renderBunker = () => {
        return this.state.bunkerData.map((val, key) => {
            return <Option value={val.bunker_id}>{val.bunker_name}</Option>
        })
    }
    renderProducer = () => {
        return this.state.producerData.map((val, key) => {
            return <Option value={val.producer_id}>{val.producer_name}</Option>
        })
    }
    fileChangedHandler = (event) => {
        this.setState({
            product_image: event.target.files[0],
        })
    }
    render() {
        return (
            <div className='add-product'>
            <div className='add-data-field'>
                <ListAddFromProduct/>
            </div>
                <div className='out-side'>
                    <Form
                        onFinish={() => this.onFinish()}>
                        <div className='parent'>
                            <div className='product-name form'>
                                <Form.Item
                                    label="Product name"
                                    name="product-name"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}
                                >
                                    <Input name="product_name" placeholder="Tên sản phẩm" onChange={(event) => this.isChange(event)} />
                                </Form.Item>
                            </div>
                            <div className='product-price form'>
                                <Form.Item
                                    label="Product price"
                                    name="product-price"
                                    rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm' }]}
                                >
                                    <Input name="product_price" placeholder="Giá sản phẩm" onChange={(event) => this.isChange(event)} />
                                </Form.Item>
                            </div></div>
                        <div className='parent'>
                            <div className='product-producer form'>
                                <Form.Item
                                    label="Product producer"
                                    name="product-producer"
                                    rules={[{ required: true, message: 'Vui lòng nhập nhà sản xuất' }]}
                                >
                                    <Select placeholder="Chọn nhà sản xuất" style={{ width: "100%" }} onChange={(value) => { this.setState({ product_producer: value }) }}>
                                        {this.renderProducer()}
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className='product-quantity form'>
                                <Form.Item
                                    label="Product quantity"
                                    name="product-quantity"
                                    rules={[{ required: true, message: 'Vui lòng nhập số lượng sản phẩm' }]}
                                >
                                    <Input name="product_quantity" placeholder="Số lượng" onChange={(event) => this.isChange(event)} />
                                </Form.Item>
                            </div></div>
                        <div className='parent'>
                            <div className='product-cate form'>
                                <Form.Item
                                    label="Product cate"
                                    name="product-cate"
                                    rules={[{ required: true, message: 'Vui lòng chọn danh mục sản phẩm' }]}>
                                    <Select placeholder="Chọn danh mục sản phẩm" style={{ width: "100%" }} onChange={(value) => { this.setState({ product_cate: value }) }}>
                                        {this.renderCate()}
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className='product-bunker form'>
                                <Form.Item
                                    label="Product bunker"
                                    name="product-bunker"
                                    rules={[{ required: true, message: 'Vui lòng chọn kho nhập' }]}>
                                    <Select placeholder="Chọn Kho" style={{ width: "100%" }} onChange={(value) => { this.setState({ product_bunker: value }) }}>
                                        {this.renderBunker()}
                                    </Select>
                                </Form.Item>
                            </div></div>
                        <div className='parent'>
                            <div className='product-unit form'>
                                <Form.Item
                                    label="Product Unit"
                                    name="product-unit"
                                    rules={[{ required: true, message: 'Vui lòng nhập đơn vị tính' }]}>
                                    <Select placeholder="Chọn danh mục sản phẩm" style={{ width: "100%" }} onChange={(value) => { this.setState({ product_unit: value }) }}>
                                        {this.renderUnit()}
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className='product-image form'>
                                <Form.Item
                                    label="Product image"
                                    name="product-image">
                                    <Input type="file" className="input-add-img" onChange={(event) => this.fileChangedHandler(event)} />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='btn-add-product'>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Thêm sản phẩm</Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
export default AddNewproducts;