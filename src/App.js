import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import Login from './components/auth/Login'
import Join from './components/auth/Join'
import JoinCompleted from './components/auth/JoinCompleted'
import CreateProduct from './components/products/CreateProduct'
import CreateRecipe from './components/recipes/CreateRecipe'
import Member from './components/auth/Member'
import QnA from './components/customerService/QnA'
import Shipping from './components/customerService/Shipping'
import Cart from './components/cart/Cart'
import Order from './components/cart/Order'
import OrderCompleted from './components/cart/OrderCompleted'
import MyPage from './components/auth/MyPage'
import CreateQnA from './components/customerService/CreateQnA'
import AdminQnA from './components/customerService/AdminQnA'
import AdminShipping from './components/customerService/AdminShipping'
import List from './components/layout/List'
import ProductDetail from './components/products/ProductDetail'
import RecipeDetail from './components/recipes/RecipeDetail'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Join" component={Join}/>
            <Route path="/JoinCompleted" component={JoinCompleted}/>
            <Route path="/CreateProduct" component={CreateProduct}/>
            <Route path="/CreateRecipe" component={CreateRecipe}/>
            <Route path="/Member" component={Member}/>
            <Route path="/QnA" component={QnA}/>
            <Route path="/Cart" component={Cart}/>
            <Route path="/Order" component={Order}/>
            <Route path="/OrderCompleted" component={OrderCompleted}/>
            <Route path="/Shipping" component={Shipping}/>
            <Route path="/MyPage" component={MyPage}/>
            <Route path="/CreateQnA" component={CreateQnA}/>
            <Route path="/AdminQnA" component={AdminQnA}/>
            <Route path="/AdminShipping" component={AdminShipping}/>
            <Route path="/List" component={List}/>
            <Route path="/Product/:pid" component={ProductDetail}/>
            <Route path="/Recipe/:rid" component={RecipeDetail}/>
            
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;