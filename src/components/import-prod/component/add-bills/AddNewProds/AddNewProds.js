import { Button, Image, Input } from 'antd';
import React, { Component } from 'react';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeProd: 0,
            prod_name: 'asdasd',
            prod_unit: 'Cái',
            prod_price: 1000,
        }
    }
    render() {
        return (
            <div className='new-comp'>
                <div className='count element-infor'><span>{this.props.count}</span></div>
                <div className='code element-infor'><span>{this.state.codeProd}</span></div>
                <div className='name element-infor'><span>{this.state.prod_name}</span></div>
                <div className='image element-infor'><Image /></div>
                <div className='quantity element-infor'><Input type="number" /></div>
                <div className='unit element-infor'><span>{this.state.prod_unit}</span></div>
                <div className='price-import element-infor'><Input type="number" /></div>
                <div className='price element-infor'><span>{this.state.prod_price}</span></div>
            </div>
        );
    }
}

class AddNewProds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: [],
            count: 1,
        }
    }
    appendChild() {
        this.setState({
            count: this.state.count + 1,
            children: [
                ...this.state.children,
                <AddComponent count={this.state.count} />
            ],
        })
    }
    render() {
        return (
            <>
                {this.state.children.map(child => child)}
                <div className='btn-add'>
                    <Button type="primary" onClick={() => this.appendChild()}><PlusOutlined /></Button>
                </div>
            </>
        );
    }
}

export default AddNewProds;