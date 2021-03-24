import React, { Component } from 'react';
import { CarryOutFilled} from '@ant-design/icons';
import './styles.scss'
import SearchProduct from './search';
import ListReceipt from './list-receipt';
import StatisticalCart from './statistical';
class CartComponent extends Component {
    render() {
        return (
            <div class='component cart'>
                <div className='class-title'>
                    <span className='title'>Danh sách đơn hàng</span>
                    <span className='title'><CarryOutFilled />Bán hàng</span>
                </div>
                <SearchProduct/>
                <div className='cart-content'>
                    <ListReceipt/>
                </div>
                <StatisticalCart billTotal={0} moneyTotal={0} oweTotal={0}/>
            </div>
        );
    }
}

export default CartComponent;