import { Button, Input, Form, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { TYPES } from 'components/redux/constants';
import store from 'components/redux/store';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListAddFromProduct from './btn-list';
const { Option } = Select;
class AddNewproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            product_image: null,
        }
    }
    onFinish = () => {
        let { product_name, product_bunker, product_cate, product_price, product_producer, product_unit, product_sell,product_description } = this.state
        const fd = new FormData()
        fd.append('image', this.state.product_image, this.state.product_image.name)
        fd.append('product_name', product_name)
        fd.append('product_bunker', product_bunker)
        fd.append('product_cate', product_cate)
        fd.append('product_price', product_price)
        fd.append('product_producer', product_producer)
        fd.append('product_unit', product_unit)
        fd.append('product_sell', product_sell)
        fd.append('product_description', product_description)
        fd.append('product_image', this.state.product_image.name)
        store.dispatch({
            type: TYPES.POST_ADD_PRODUCT,
            fd
        })
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    renderCate = () => {
        return this.props.cateData.map((val, key) => {
            return <Option value={val.cate_id}>{val.cate_name}</Option>
        })
    }
    renderUnit = () => {
        return this.props.unitData.map((val, key) => {
            return <Option value={val.unit_id}>{val.unit_name}</Option>
        })
    }
    // renderBunker = () => {
    //     return this.props.bunkerData.map((val, key) => {
    //         return <Option value={val.bunker_id}>{val.bunker_name}</Option>
    //     })
    // }
    renderProducer = () => {
        return this.props.producerData.map((val, key) => {
            return <Option  value={val.producer_id}>{val.producer_id}{'      '}{val.producer_name}</Option>
        })
    }
    fileChangedHandler = (event) => {
        this.setState({
            product_image: event.target.files[0],
        })
    }
    render() {
        console.log(this.state);
        return (
            <div className='add-product'>
                <div className='add-data-field'>
                    <ListAddFromProduct />
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
                                    <Select  showSearch placeholder="Chọn nhà sản xuất" style={{ width: "100%" }} onChange={(key) => { this.setState({ product_producer: key }) }}>
                                        {this.renderProducer()}
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className='product-quantity form'>
                                <Form.Item
                                    label="Product quantity"
                                    name="product-quantity"
                                    rules={[{ required: false, message: 'Vui lòng nhập số lượng sản phẩm' }]}
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
                                    <Select  showSearch placeholder="Chọn danh mục sản phẩm" style={{ width: "100%" }} onChange={(value) => { this.setState({ product_cate: value }) }}>
                                        {this.renderCate()}
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className='product-bunker form'>
                                <Form.Item
                                    label="Product price sell"
                                    name="product-sell"
                                    rules={[{ required: true, message: 'Vui lòng chọn kho nhập' }]}>
                                    <Input placeholder='Nhập giá bán' type="number" name="product_sell" onChange={(event) => {this.isChange(event)}} />
                                </Form.Item>
                            </div></div>
                        <div className='parent'>
                            <div className='product-unit form'>
                                <Form.Item
                                    label="Product Unit"
                                    name="product-unit"
                                    rules={[{ required: true, message: 'Vui lòng nhập đơn vị tính' }]}>
                                    <Select  showSearch placeholder="Chọn danh mục sản phẩm" style={{ width: "100%" }} onChange={(value) => { this.setState({ product_unit: value }) }}>
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
                        <div className='parent'>
                            <div className='description form'>
                                <Form.Item
                                    label="Product description"
                                    name="product-description">
                                    <TextArea type="text" className="input-description" name="product_description" onChange={(event) => {this.isChange(event)}}  />
                                </Form.Item>
                            </div>
                            <div className="form btn-add-prod">
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Thêm sản phẩm</Button>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
export default connect()(AddNewproducts)