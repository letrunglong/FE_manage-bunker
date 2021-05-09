import { Button, Image, Input, Select } from 'antd';
import React, { Component } from 'react';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import axios from 'axios';
import store from 'components/redux/store';
import { TYPES } from 'components/redux/constants';
const { Option } = Select
class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    renderProd = () => {
        let prod = this.props.allProducts
        return prod.map((val) => {
            return <Option value={val.prod_id}>{val.prod_name}</Option>
        })
    }
    renderImage = () => {
        let prod = this.props.allProducts
        return prod.map((val) => {
            if (this.state.codeProd === val.prod_id) {
                let imgLink = "http://localhost:4000/products-image/" + val.prod_image
                return <Image style={{ width: 100, height: 50 }} src={imgLink} />
            }
        })
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })

    }
    setPriceProduct = () => {
        let quantity = this.state.quantity
        let price = this.state.price
        let priceOne = quantity*price
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          })
        return formatter.format(priceOne)
    }
    renderUnit = () => {
        return this.props.allunit.map((val,key)=>{
            return <Option value={val.unit_id}>{val.unit_name}</Option>
        })
    }
    render() {
        store.dispatch({
            type:TYPES.SET_DATA_BILLS_IMPORT,
            billData:this.state
        })
        return (
            <div className='new-comp'>
                <div className='count element-infor'><span>{this.props.count}</span></div>
                <div className='code element-infor'><span>{this.state.codeProd}</span></div>
                <div className='name element-infor'>
                    <Select
                        onChange={
                            value => {
                                this.setState({
                                    codeProd: value,
                                })
                            }
                        }
                    >
                        {this.renderProd()}
                    </Select>
                </div>
                <div className='image element-infor'>

                    {this.renderImage()}

                </div>
                <div className='quantity element-infor'><Input type="number" name='quantity' onChange={(event)=>this.isChange(event)}/></div>
                <div className='unit element-infor'><Select
                        onChange={
                            value => {
                                this.setState({
                                    unit: value,
                                })
                            }
                        }
                    >
                        {this.renderUnit()}
                    </Select></div>
                <div className='price-import element-infor'><Input type="number" name='price' onChange={(event)=>this.isChange(event)}/></div>
                <div className='price element-infor'><span >{this.setPriceProduct()}</span></div>
            </div>
        )
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
                <AddComponent count={this.state.count} allProducts={this.props.allProducts} allunit={this.props.allunit} arr={[]}/>
            ],
        })
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: '/getProducts',
            headers: {
                "Content-type": "Application/json"
            }
        }).then(res => {
            store.dispatch({
                type: TYPES.GET_ALL_PRODUCTS,
                data: res.data
            })
        }
        )
        axios({
            method: "GET",
            url: '/get-unit',
            headers: {
                "Content-type": "Application/json"
            }
        }).then(res => {
            store.dispatch({
                type: TYPES.GET_UNIT,
                data: res.data
            })
        }
        )
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
const mapStateToProps = state => {
    return {
        allproducts: state.getProducts.data,
        allunit: state.unitReducer
    }
}
export default connect(mapStateToProps)(AddNewProds);