import { Button, Form, Input } from 'antd';
import React, { Component } from 'react';

class AddBunkerForm extends Component {
    render() {
        return (
            <div className='parent bunker'>
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

export default AddBunkerForm;