import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getAuth } from "@firebase/auth";
import PrivateRoute from "./Routes/PrivateRoute";
import UnSignedRoute from "./Routes/UnSignedRoute";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import Cart from "./pages/Cart/Cart";
import FlowerDetails from "./pages/FlowerDetails/FlowerDetails";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "./redux/ducks/user";

function App() {
    const auth = getAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((user) => {
            if (user) dispatch(setUser(user));
            else dispatch(removeUser());
        });
        return unSubscribe;
    }, []);
    return (
        <div className='App'>
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <Switch>
                    <UnSignedRoute path='/login' component={Login} />
                    <PrivateRoute path='/cart' component={Cart} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/store' component={Shop} />
                    <Route exact path='/store/:flowerID' component={FlowerDetails} />
                    <Route path='/blog' component={Blog} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
