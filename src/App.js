import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import Login from './components/auth/Login'
import Join from './components/auth/Join'
import JoinCompleted from './components/auth/JoinCompleted'
import CreateProduct from './components/products/CreateProduct'
import CreateRecipe from './components/recipes/CreateRecipe'
import UpdateRecipe from './components/recipes/UpdateRecipe'
import Member from './components/auth/Member'
import QnA from './components/customerService/QnA'
import QnADetail from './components/customerService/QnADetail'
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
import MemberDetail from './components/auth/MemberDetail'
import Profile from './components/auth/Profile'
import Favorite from './components/layout/Favorite'
import AdminShippingDetail from './components/customerService/AdminShippingDetail'
import ShippingDetail from './components/customerService/ShippingDetail'
import RecipeContextProvider from './contexts/recipeContext'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App Site'>
                    <Navbar/>
                    <RecipeContextProvider>
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/join' component={Join}/>
                            <Route path='/joincompleted' component={JoinCompleted}/>
                            <Route path='/createproduct' component={CreateProduct}/>
                            <Route path='/createrecipe' component={CreateRecipe}/>
                            <Route path='/favorite/:page' component={Favorite}/>
                            <Route exact path='/member/:page' component={Member}/>
                            <Route path='/qna/:page' component={QnA}/>
                            <Route path='/qnaDetail/:id' component={QnADetail}/>
                            <Route path='/cart' component={Cart}/>
                            <Route path='/order' component={Order}/>
                            <Route path='/ordercompleted' component={OrderCompleted}/>
                            <Route path='/shipping' component={Shipping}/>
                            <Route path='/myPage' component={MyPage}/>
                            <Route path='/profile' component={Profile}/>
                            <Route path='/list/:page' component={List}/>
                            <Route path='/createqna' component={CreateQnA}/>
                            <Route path='/adminqna' component={AdminQnA}/>
                            <Route path='/adminshipping' component={AdminShipping}/>
                            <Route path='/product/:id' component={ProductDetail}/>
                            <Route path='/recipe/:id' component={RecipeDetail}/>
                            <Route path='/memberDetail/:id' component={MemberDetail}/>
                            <Route path='/adminshippingdetail/:id' component={AdminShippingDetail}/>
                            <Route path='/shippingdetail/:id' component={ShippingDetail}/>
                            <Route path='/updaterecipe/:id' component={UpdateRecipe}/>
                        </Switch>
                    </RecipeContextProvider>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
