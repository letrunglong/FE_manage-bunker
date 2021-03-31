import { Button, Input, Form, Select, Upload, Image } from 'antd';

import axios from 'axios';
import { TYPES } from 'components/redux/constants';
import store from 'components/redux/store';
import React, { Component } from 'react';
const { Option } = Select;
const axiosClient = (link, method, data) => {
    return axios({
        method: `${method}`,
        url: `${link}`,
        data: `${data}`
    })
}
const  string_to_slug = (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àầáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
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
            imageName: '',
            srcImg:''
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
            axiosClient('/products/images/1',"GET").then(res=>console.log(res))
        }
    }
    onFinish = () => {
        let { product_name, product_bunker, product_cate, product_price, product_producer, product_quantity, product_unit } = this.state
        let obj = {}
        obj.product_name = product_name
        obj.product_bunker = product_bunker
        obj.product_cate = product_cate
        obj.product_price = product_price
        obj.product_producer = product_producer
        obj.product_quantity = product_quantity
        obj.product_unit = product_unit
        // store.dispatch({ type: TYPES.POST_ADD_PRODUCT, data: obj })
        const fd = new FormData()
        // fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        const nameimag = () => {
            return string_to_slug(this.state.imageName.replace(this.state.imageName,this.state.product_name))
        }
        fd.append('image', this.state.selectedFile, nameimag())
        axios.post('/add-products', fd).then(res => console.log(res))
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

    //set image to state
    fileChangedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            imageName: event.target.files[0].name
        })
    }
    render() {
        return (
            <div className='add-product'>
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
                                <Input type="file" className="input-add-img" onChange={(event) => this.fileChangedHandler(event)} />
                                <Image src={this.state.srcImg}/>
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