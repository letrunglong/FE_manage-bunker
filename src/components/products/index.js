import React, { Component } from 'react';
import { PlusOutlined, RollbackOutlined } from '@ant-design/icons';
import './styles.scss'
import SearchOnProduct from './search'
import ProductsList from './list-product';
import { Button } from 'antd';
import AddNewproducts from './add-product';
import { connect } from 'react-redux';
import axios from 'axios';
const axiosClient = (link, method, data) => {
    return axios({
        method: `${method}`,
        url: `${link}`,
        data: `${data}`
    })
}
class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddProduct: false,
            cateData:[],
            unitData:[],
            bunkerData:[],
            producerData:[],
        }
    }
    componentWillMount(){
        if (localStorage.getItem('token')) {
            axiosClient('/get-categories', "GET").then(res => {
                this.setState({
                    cateData: res.data
                })
            })
            axiosClient('/get-unit', "GET").then(res => {
                this.setState({
                    unitData: res.data
                })
            })
            axiosClient('/get-bunker', "GET").then(res => {
                this.setState({
                    bunkerData: res.data
                })
            })
            axiosClient('/get-producer', "GET").then(res => {
                this.setState({
                    producerData: res.data
                })
            })
        }
    }
    renderItems = () => {
        if (this.state.isAddProduct)
            return <AddNewproducts 
            cateData={this.state.cateData}
            unitData = {this.state.unitData}
            bunkerData = {this.state.bunkerData}
            producerData = {this.state.producerData}
            />
        return <>
            <SearchOnProduct 
            cateData={this.state.cateData}
            producerData = {this.state.producerData}
            />
            <ProductsList />
        </>
    }
    renderTextButton = () => {
        if (this.state.isAddProduct)
            return <><RollbackOutlined /><span>Trở về</span></>
        return <><PlusOutlined />
            <span>Thêm sản phẩm</span></>
    }
    render() {
        return (
            <div className='component products'>
                <div className='outside'>
                    <div className='title'>Danh sách sản phẩm</div>
                    <Button type="primary" className='title btn-add' onClick={() => this.setState({ isAddProduct: !this.state.isAddProduct })}>
                        {this.renderTextButton()}
                    </Button>
                </div>
                {
                    this.renderItems()
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.getProducts.data
    }
}
export default connect(mapStateToProps)(ProductComponent);