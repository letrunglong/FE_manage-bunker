import { Button, Input, Form } from 'antd';
import { ROUTE } from 'common/constants';
import { TYPES } from 'components/redux/constants';
import store from 'components/redux/store';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss'
class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            username: "",
            confirmpassword: "",
        }
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    onFinish = (email, password, firstname, lastname, username, confirmpassword) => {
        const result = "BUNKER-MANAGE_" + Math.random().toString(36).substring(2, 19);
        const obj = {}
        obj.email = email
        obj.password = password
        obj.firstname = firstname
        obj.lastname = lastname
        obj.username = username
        obj.confirmpassword = confirmpassword
        obj.token = result.toUpperCase()
        if (password.length < 6) {
            store.dispatch({ type: TYPES.ALERT_NOTIFIER_ON, messages: "Mật khẩu phải lớn hơn 6 kí tự!" })
        } else if (password !== confirmpassword) {
            store.dispatch({ type: TYPES.ALERT_NOTIFIER_ON, messages: "Nhập lại mật khẩu không chính xác!" })
        } else {
            store.dispatch({ type: TYPES.AUTH_SIGNUP, obj: obj })
        }

    }
    render() {

        return (
            <div className='sign-up sign-in public-route'>
                <div className='child'>
                    <div className='title'>
                        SIGN UP
                    </div>
                    <Form
                        onFinish={() => this.onFinish(this.state.email, this.state.password, this.state.firstname, this.state.lastname, this.state.username, this.state.confirmpassword)}>
                        <div className='full-name form'>
                            <div className='first-name form'>
                                <Form.Item
                                    label="First name"
                                    name="firstname"
                                    rules={[{ required: true, message: 'Please input your first name!' }]}
                                >
                                    <Input name="firstname" onChange={(event) => this.isChange(event)} />
                                </Form.Item>
                            </div>
                            <div className='last-name form'>
                                <Form.Item
                                    label="Last name"
                                    name="lastname"
                                    rules={[{ required: true, message: 'Please input your last name!' }]}
                                >
                                    <Input name="lastname" onChange={(event) => this.isChange(event)} />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='username form'>
                            <Form.Item
                                label="User name"
                                name="username"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input name="username" onChange={(event) => this.isChange(event)} />
                            </Form.Item>
                        </div>
                        <div className='email form'>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input type="email" name="email" onChange={(event) => this.isChange(event)} />
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
                        <div className='pass-confirm form'>
                            <Form.Item
                                label="Confirm password"
                                name="confirm-password"
                                rules={[{ required: true, message: 'Please confirm your password!' }]}>
                                <Input type="password" name="confirmpassword" onChange={(event) => this.isChange(event)} />
                            </Form.Item>
                        </div>
                        <div className='btn-signin'>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Đăng kí</Button>
                            </Form.Item>
                        </div>

                        <div className='bottom'>
                            <span className='sign-up btn-link'><Link to={ROUTE.SIGN_IN}>Đăng nhập</Link></span>
                            <span className='forgot btn-link'><Link to={ROUTE.FORGOT}>Quên mật khẩu</Link></span>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default connect()(SignUpPage)