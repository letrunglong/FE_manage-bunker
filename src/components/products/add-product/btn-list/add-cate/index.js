import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import store from 'components/redux/store';
import { TYPES } from 'components/redux/constants';
import { connect } from 'react-redux';
class AddCateForm extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    onFinish = (cate_name,cate_description) => {
        let obj ={cate_name,cate_description}
        store.dispatch({type:TYPES.POST_ADD_CATE_PRODUCT,obj})
    }
    render() {
        return (
            <div className='parent cate'>
                <div className='title-modal'>
                    {this.props.title}
                </div>
                <Form onFinish={()=>this.onFinish(this.state.cate_name,this.state.cate_description)}>
                <div className='producer-form form'>
                            <Form.Item
                                label="Tên danh mục"
                                name="cate-name"
                                rules={[{ required: true, message: 'Vui lòng nhập tên danh mục' }]}
                            >
                                <Input name="cate_name" onChange={(event) => this.isChange(event)} />
                            </Form.Item>
                            <Form.Item
                                label="Mô tả"
                                name="producer-description"
                            >
                                <Input name="cate_description" onChange={(event) => this.isChange(event)} />
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

export default connect()(AddCateForm)