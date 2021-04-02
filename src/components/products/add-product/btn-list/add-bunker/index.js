import { Button, Form, Input } from 'antd';
import React, { Component } from 'react';
import store from 'components/redux/store';
import { TYPES } from 'components/redux/constants';
import { connect } from 'react-redux';
class AddBunkerForm extends Component {
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
    onFinish = (bunker_name,bunker_location) => {
        let obj ={bunker_name,bunker_location}
        store.dispatch({type:TYPES.POST_ADD_BUNKER_PRODUCT,obj})
    }
    render() {
        return (
            <div className='parent bunker'>
                <div className='title-modal'>
                    {this.props.title}
                </div>
                <Form  onFinish={()=>this.onFinish(this.state.bunker_name,this.state.bunker_location)}>
                    <div className='bunker-form form'>
                        <Form.Item
                            label="Tên nhà sản xuất"
                            name="bunker-name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên nhà sản xuất' }]}
                        >
                            <Input name="bunker_name" onChange={(event) => this.isChange(event)} />
                        </Form.Item>
                        <Form.Item
                            label="Mô tả"
                            name="producer-location"
                        >
                            <Input name="bunker_location" onChange={(event) => this.isChange(event)} />
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

export default connect()(AddBunkerForm);