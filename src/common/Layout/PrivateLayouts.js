import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import './styles.scss'
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import Layout from "antd/lib/layout/layout";
import DashBoard from "components/dashboard";
import { DashboardOutlined, ShoppingCartOutlined, DatabaseOutlined, UserOutlined, ShrinkOutlined, ArrowsAltOutlined } from '@ant-design/icons';
import CartComponent from "components/cart";
import ProductComponent from "components/products";
import CustomersComponent from "components/customers";
import ImportProduct from "components/import-prod";
import ExportProduct from "components/export-prod";
import { ROUTE } from "common/constants";
// var sectionStyle = {
//   width: "100%",
//   height: "100%",
//   backgroundImage: `url(${background})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center center fixed',
//   backgroundRepeat: 'no-repeat'
// };



const PrivateLayout = () => {
  let history = useHistory();
  return (
    <>
      <div className="top-bar">
        <div className="container">
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
            </SideNav.Nav>
          </SideNav>
          <main className='main'>
            <Layout className="private-layout-container">
              <Layout>
                <div className="content-layout">
                  <Switch>
                    <Route exact path={ROUTE.DASHBOARD} component={DashBoard} />
                    <Route exact path={ROUTE.CART} component={CartComponent} />
                    <Route exact path={ROUTE.PRODUCT} component={ProductComponent} />
                    <Route exact path={ROUTE.CUSTOMER} component={CustomersComponent} />
                    <Route exact path={ROUTE.IMPORT_PRODUCTS} component={ImportProduct} />
                    <Route exact path={ROUTE.EXPORT_PRODUCTS} component={ExportProduct} />
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