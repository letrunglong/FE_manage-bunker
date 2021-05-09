import axios from 'axios';
import { TYPES } from 'components/redux/constants';
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
    renderIMG = () => {
        return "https://drscdn.500px.org/photo/1031604824/q%3D80_m%3D2000/v2?sig=865e457a04ba93c4862697d0ae75194acab490e40243dfff672b3ee9f008fcf0"
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