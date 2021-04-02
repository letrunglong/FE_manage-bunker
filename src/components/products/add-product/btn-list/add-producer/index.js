import { Input,Form, Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddProducerForm extends Component {
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className='producer parent'>
                <div className='title-modal'>
                    {this.props.title}
                </div>
                <Form>
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