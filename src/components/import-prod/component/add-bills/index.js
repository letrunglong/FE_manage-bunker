import { Button, DatePicker, Input, Select, Form } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InfoCircleOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import AddNewProds from './AddNewProds/AddNewProds';
import Modal from 'antd/lib/modal/Modal';
import store from 'components/redux/store';
import { TYPES } from 'components/redux/constants';
import axios from 'axios';
const { Option } = Select


class AddBillImportComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalShow: false,
            suplier: []
        }
    }
    showModalSuplier = () => {
        this.setState({
            isModalShow: !this.state.isModalShow
        })
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    onFinish = () => {
        let suplier = this.state.suplier_name
        store.dispatch({
            type: TYPES.POST_ADD_SUPLIER,
            suplier
        })
    }
    componentDidMount = () => {
        axios({
            url: '/get-suplier',
            method: 'GET'
        }).then(res => {
            this.setState({
                suplier: res.data
            })
        })
    }
    renderSuplier = () => {
        return this.state.suplier.map((val, key) => {
            return <Option key={val.suplier_id}>{val.suplier_name}</Option>
        })
    }
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
                        <div className='out-bills'>
                            <div className='child-add stt'><span>STT</span></div>
                            <div className='child-add'><span>Mã hàng</span></div>
                            <div className='child-add'><span>Tên sản phẩm</span></div>
                            <div className='child-add'><span>Hình ảnh</span></div>
                            <div className='child-add'><span>Số lượng</span></div>
                            <div className='child-add'><span>ĐVT</span></div>
                            <div className='child-add'><span>Giá nhập</span></div>
                            <div className='child-add'><span>Thành tiền</span></div>
                        </div>
                        <div className='out-block'>
                            {/* <div className='new-comp'> */}
                            <AddNewProds allProducts={this.props.allProducts}/>
                            {/* </div> */}

                        </div>

                    </div>
                </div>
                <div className="right">
                    <div className='top'>
                        <div className='child suplier'>
                            <div className='text-title'>Nhà cung cấp</div>
                            <div className='input-title'>
                                <Select>
                                    {this.renderSuplier()}
                                </Select>
                                <span className='button-add'><Button type="primary" onClick={() => this.showModalSuplier()}>+</Button></span>
                                <div className='modal'>
                                    <Modal className="modal-add-suplier" title="Thêm nhà cung cấp" visible={this.state.isModalShow} onCancel={() => this.showModalSuplier()}>
                                        <Form
                                            onFinish={() => this.onFinish()}>
                                            <Form.Item
                                                label="Tên nhà cung cấp"
                                                name="suplier_name"
                                                rules={[{ required: true, message: 'Nhập tên nhà cung cấp' }]}
                                            >
                                                <Input name="suplier_name" onChange={(event) => this.isChange(event)} />
                                            </Form.Item>
                                            <Form.Item
                                            >
                                                <Button type="primary" htmlType="submit">Thêm</Button>
                                            </Form.Item>
                                        </Form>
                                    </Modal>
                                </div>
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
                                <Button className='mail f16' disabled>{localStorage.getItem('email')}</Button>
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
                            <div className='child details'>
                                <div className='text-title'>Tiền hàng</div>
                                <div className='input-title'>
                                    <span className='price f16'>1,000,000</span>
                                </div>
                            </div>
                            <div className='child details'>
                                <div className='text-title'>Chiết khấu</div>
                                <div className='input-title'>
                                    <div className='tax'><Input type="number" placeholder='?%' /></div>
                                </div>
                            </div>
                            <div className='child details'>
                                <div className='text-title'>Tổng tiền</div>
                                <div className='input-title'>
                                    <span className='total f16'>1,000,000</span>
                                </div>
                            </div>
                        </div>
                        <div className='btn-save'>
                            <Button type="primary">Lưu</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allProducts: state.getProducts.data
    }
}
export default connect(mapStateToProps)(AddBillImportComponent)