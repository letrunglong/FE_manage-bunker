import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActivitiesOfTheDay from './activities';
import BunkerInfor from './bunker-infor';
import OrderAmount from './order-amount';
import ProductBeFault from './product-be-fault';
import ProductInfor from './product-infor';
import { RevenueOfTheDay } from './revenue-in-day';
import './styles.scss'

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }
    
    renderIMG = () => {
        return "https://instagram.fsgn5-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/158601647_732931767410536_126768768056918096_n.jpg?tp=1&_nc_ht=instagram.fsgn5-4.fna.fbcdn.net&_nc_cat=104&_nc_ohc=c0kn_efk0oMAX8R02Dr&ccb=7-4&oh=5adf9fb52c32d7ce7b620225c187c02b&oe=607DF3FC&_nc_sid=4f375e"
    }
    render() {
        return (
            <div className='component dashboard'>
                <span className='title'>Hoạt động hôm nay</span>
                <div className='content-top'>
                    <RevenueOfTheDay imageLink={this.renderIMG()} />
                    <OrderAmount imageLink={this.renderIMG()} />
                    <ProductBeFault imageLink={this.renderIMG()} />
                </div>
                <div className='content-bottom'>
                    <ActivitiesOfTheDay sold={0} billSold={"0/0"} billCount={0} payForStock={0} />
                    <BunkerInfor sold={0} billSold={"0/0"} billCount={0} payForStock={0} />
                    <ProductInfor sold={0} billSold={"0/0"} billCount={0} payForStock={0} />
                </div>
            </div>
        );
    }
}
export default connect()(DashBoard)