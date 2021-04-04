import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import store from 'components/redux/store';
import { TYPES } from 'components/redux/constants';
class AddUnitForm extends Component {
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    onFinish = (unit_name,unit_description) => {
        let obj ={unit_name,unit_description}
        store.dispatch({
            type:TYPES.POST_ADD_UNIT_PRODUCT,
            obj
        })
    }
    render() {
        return (
            <div className='parent unit'>
                <div className='title-modal'>
                    {this.props.title}
                </div>
                <Form onFinish={()=>{this.onFinish(this.state.unit_name,this.state.unit_description)}}>
                <div className='unit-form form'>
                            <Form.Item
                                label="Tên đơn vị tính"
                                name="unit-name"
                                rules={[{ required: true, message: 'Vui lòng nhập đươn vị tính' }]}
                            >
                                <Input name="unit_name" onChange={(event) => this.isChange(event)} />
                            </Form.Item>
                            <Form.Item
                                label="Mô tả"
                                name="unit-description"
                            >
                                <Input name="unit_description" onChange={(event) => this.isChange(event)} />
                            </Form.Item>
                            <Form.Item
                            >
                            <Button type="primary" htmlType="submit">Thêm mới</Button>
                            </Form.Item>
                        </div>
                </Form>
            </div>
        );
    }
}

export default AddUnitForm;