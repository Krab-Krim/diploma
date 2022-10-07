import React from "react";
import NavBar from "./components/ui/navBar";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./layouts/main";
import NotFound from "./components/page/notFound/notFound";
import Catalog from "./layouts/catalog";
import Blog from "./layouts/blog";
import Delivery from "./layouts/delivery";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import BasketPage from "./components/page/backet/basketPage";
import CatalogDog from "./components/page/catalog/catalogDog";
import CatalogCat from "./components/page/catalog/catalogCat";
import CatalogFish from "./components/page/catalog/catalogFish";
import CatalogBird from "./components/page/catalog/catalogBird";
import CatalogRodent from "./components/page/catalog/catalogRodent";
import CatalogReptiles from "./components/page/catalog/catalogReptiles";
import CatalogCardPage from "./components/page/catalog/catalogCardPage";
import BlogPage from "./components/page/blogPage";
import Requisites from "./layouts/requisites";
import Question from "./layouts/question";
import Feedback from "./layouts/feedback";
import User from "./layouts/user";
import About from "./layouts/about";
import Breadcrumbs from "./components/common/breadcrumbs";
import FooterBar from "./components/common/footerBar";
import {ToastContainer} from "react-toastify";
import AppLoader from "./components/ui/hoc/appLoader";
import ProtectedRoute from "./components/common/protectedRoute";
import Login from "./layouts/login";
import LogOut from "./components/common/userLogReg/logOut";
import Admin from "./layouts/admin";
import AdminEdit from "./components/page/admin/adminEdit";
import AdminAddProduct from "./components/page/admin/adminAddProduct";

function App() {
    return (
        <div>
            <AppLoader>
                <Header/>
                <NavBar/>
                <FooterBar/>
                <Breadcrumbs/>
                <Switch>
                    <ProtectedRoute
                        path="/users/:userId?/:edit?"
                        component={User}
                    />
                    <Route path="/" exact component={Main}/>
                    <Route path="/admin" exact component={Admin}/>
                    <Route path="/admin/:adminId?" component={AdminEdit}/>
                    <Route path="/adminAddProduct" component={AdminAddProduct}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={LogOut}/>
                    <Route path="/requisites" component={Requisites}/>
                    <Route path="/question" component={Question}/>
                    <Route path="/feedback" component={Feedback}/>
                    <Route path="/blog" exact component={Blog}/>
                    <Route path="/blog/:blogId?" component={BlogPage}/>
                    <Route path="/catalog" exact component={Catalog}/>
                    <Route path="/catalog/dog" component={CatalogDog}/>
                    <Route path="/catalog/cat" component={CatalogCat}/>
                    <Route path="/catalog/fish" component={CatalogFish}/>
                    <Route path="/catalog/bird" component={CatalogBird}/>
                    <Route path="/catalog/rodent" component={CatalogRodent}/>
                    <Route path="/catalog/reptiles" component={CatalogReptiles}/>
                    <Route path="/catalog/:catalogId?" component={CatalogCardPage}/>
                    <Route path="/basket" component={BasketPage}/>
                    <Route path="/delivery" component={Delivery}/>
                    <Route path="/404" component={NotFound}/>
                    <Redirect to="404"/>
                </Switch>
                <Footer/>
            </AppLoader>
            <ToastContainer/>
        </div>
    );
}

export default App;