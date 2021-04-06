import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTE } from 'common/constants';
import './styles.scss'
import axios from 'axios';
import store from 'components/redux/store';
import { connect } from 'react-redux';
import { TYPES } from 'components/redux/constants';
class AuthLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    onFinish = (email, pass) => {
        let obj = {}
        obj.email = email
        obj.password = pass
        axios({
            method: "POST",
            url: '/login',
            headers: {
                "Content-Type": "Application/json"
            },
            data: JSON.stringify(obj)

        }).then(res => {
            store.dispatch({ type: TYPES.ALERT_NOTIFIER_ON, messages: res.data.messages })
            setTimeout(function () { store.dispatch({ type: TYPES.AUTH_SIGNIN, res }) }, 200);

        }
        ).catch(err => {
            store.dispatch({ type: TYPES.ALERT_NOTIFIER_ON, messages: "Không có phản hồi từ máy chủ" })
        })
    }
    render() {
        return (
            <div className='sign-in public-route'>
                <div className='child'>
                    <div className='title'>
                        SIGN IN
                    </div>
                    <Form
                        onFinish={() => this.onFinish(this.state.email, this.state.password)}>
                        <div className='email form'>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input name="email" onChange={(event) => this.isChange(event)} />
                            </Form.Item>
                        </div>
                        <div className='pass form'>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}>
                                <Input type="password" name="password" onChange={(event) => this.isChange(event)} />
                            </Form.Item>
                        </div>
                        <div className='btn-signin'>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Đăng nhập</Button>
                            </Form.Item>
                        </div>

                        <div className='bottom'>
                            <span className='sign-up btn-link'><Link to={ROUTE.SIGN_UP}>Đăng kí</Link></span>
                            <span className='forgot btn-link'><Link to={ROUTE.FORGOT}>Quên mật khẩu</Link></span>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
export default connect()(AuthLogin)