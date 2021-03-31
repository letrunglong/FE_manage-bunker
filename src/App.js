import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import './App.css';
import AuthLogin from './components/auth/signin';
import DashBoard from './components/dashboard';
import PublicLayout from './common/Layout/PublicLayouts'
import PrivateLayout from './common/Layout/PrivateLayouts'
import { ROUTE } from 'common/constants';
import CartComponent from 'components/cart';
import ProductComponent from 'components/products';
import CustomersComponent from 'components/customers';
import ImportProduct from 'components/import-prod';
import ExportProduct from 'components/export-prod';
import RevenueComponent from 'components/renueve';
import Notificate from 'components/notificate'
import SignUpPage from 'components/auth/signup';

const checkLogin = () => {
  if (localStorage.getItem("token"))
    return true
  return false
}
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        //   checkLogin() ? (
        //   <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        // ) : 
        <PublicLayout {...rest}>
          <Component {...props}></Component>
        </PublicLayout>
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkLogin() ? (
          <PrivateLayout {...rest}>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: `/login`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
// const NavBar = () => {
//   return <div className='nav-bar'>
//   </div>
// }
function App() {
  return (
    <div className="App" >
      <Notificate />
      {/* <NavBar/> */}
      <Router>
        <Route render={({ location, history }) => (
          <React.Fragment>
            <PublicRoute exact path={ROUTE.SIGN_IN} component={AuthLogin} />
            <PublicRoute exact path={ROUTE.SIGN_UP} component={SignUpPage} />
            {/* <PublicRoute exact path={ROUTE.FORGOT} component={Authforgot} /> */}
            <PrivateRoute exact path={ROUTE.DASHBOARD} component={DashBoard} />
            <PrivateRoute exact path={ROUTE.CART} component={CartComponent} />
            <PrivateRoute exact path={ROUTE.PRODUCT} component={ProductComponent} />
            <PrivateRoute exact path={ROUTE.CUSTOMER} component={CustomersComponent} />
            <PrivateRoute exact path={ROUTE.IMPORT_PRODUCTS} component={ImportProduct} />
            <PrivateRoute exact path={ROUTE.EXPORT_PRODUCTS} component={ExportProduct} />
            <PrivateRoute exact path={ROUTE.REVENUE} component={RevenueComponent} />
          </React.Fragment>
        )}
        />
      </Router>
    </div>
  );
}

export default App;
