import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import './styles.scss'
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import Layout from "antd/lib/layout/layout";
import DashBoard from "components/dashboard";
import { DashboardOutlined, ShoppingCartOutlined, DatabaseOutlined, UserOutlined, ShrinkOutlined, ArrowsAltOutlined, RiseOutlined } from '@ant-design/icons';
import CartComponent from "components/cart";
import ProductComponent from "components/products";
import CustomersComponent from "components/customers";
import ImportProduct from "components/import-prod";
import ExportProduct from "components/export-prod";
import { ROUTE } from "common/constants";
import RevenueComponent from "components/renueve";
// const background = "https://instagram.fsgn5-7.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/158082325_236069748210003_7203886424600269919_n.jpg?tp=1&_nc_ht=instagram.fsgn5-7.fna.fbcdn.net&_nc_cat=103&_nc_ohc=15mIMqrqVLAAX-7FtXM&ccb=7-4&oh=f8956b012b89fb902f959aa436ff3905&oe=607EEDFF&_nc_sid=4f375e"
const background = "https://drscdn.500px.org/photo/1029586436/q%3D80_m%3D2000/v2?sig=39c2b83ba428b495155b1c1d456bdaafb29e6f80630e498eeeedfa39168494e7"
var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover ',
  backgroundPosition: 'center center fixed',
  backgroundRepeat: 'no-repeat'
};


const PrivateLayout = () => {
  let history = useHistory();
  return (
    <>
      <div className="top-bar">
        <div className="containerr" >
          <SideNav
            onSelect={(selected) => {
              const to = '/' + selected;
              if (window.location.pathname !== to) {
                history.push(to)
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="dashboard">
              <NavItem eventKey="dashboard">
                <NavIcon>
                  <DashboardOutlined />
                  <p>Dashboard</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="cart">
                <NavIcon>
                  <ShoppingCartOutlined />
                  <p>Cart</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="products">
                <NavIcon>
                  <DatabaseOutlined />
                  <p>Products</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="customers">
                <NavIcon>
                  <UserOutlined />
                  <p>Customer</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="import-products">
                <NavIcon>
                  <ShrinkOutlined />
                  <p>Products import</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="export-products">
                <NavIcon>
                  <ArrowsAltOutlined />
                  <p>Products export</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="revenue">
                <NavIcon>
                  <RiseOutlined />
                  <p>Revenue</p>
                </NavIcon>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main className='main' >
            <Layout className="private-layout-container">
              <Layout>
                <div className="content-layout" style={sectionStyle}>
                  <Switch>
                    <Route exact path={ROUTE.DASHBOARD} component={DashBoard} />
                    <Route exact path={ROUTE.CART} component={CartComponent} />
                    <Route exact path={ROUTE.PRODUCT} component={ProductComponent} />
                    <Route exact path={ROUTE.CUSTOMER} component={CustomersComponent} />
                    <Route exact path={ROUTE.IMPORT_PRODUCTS} component={ImportProduct} />
                    <Route exact path={ROUTE.EXPORT_PRODUCTS} component={ExportProduct} />
                    <Route exact path={ROUTE.REVENUE} component={RevenueComponent} />
                  </Switch>
                </div>
              </Layout>
            </Layout>
          </main>
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;