import { Input, Form, Button } from 'antd';
import { TYPES } from 'components/redux/constants';
import store from 'components/redux/store';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddProducerForm extends Component {
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    onFinish = (producer_name, producer_description) => {
        let obj = { producer_name, producer_description }
        store.dispatch({
            type: TYPES.POST_ADD_PRODUCER_PRODUCT,
            obj
        })
    }
    render() {
        return (
            <div className='producer parent'>
                <div className='title-modal'>
                    {this.props.title}
                </div>
                <Form onFinish={() => { this.onFinish(this.state.producer_name, this.state.producer_description) }}>
                    <div className='producer-form form'>
                        <Form.Item
                            label="Tên nhà sản xuất"
                            name="producer-name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên nhà sản xuất' }]}
                        >
                            <Input name="producer_name" onChange={(event) => this.isChange(event)} />
                        </Form.Item>
                        <Form.Item
                            label="Mô tả"
                            name="producer-description"
                        >
                            <Input name="producer_description" onChange={(event) => this.isChange(event)} />
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

export default connect()(AddProducerForm);