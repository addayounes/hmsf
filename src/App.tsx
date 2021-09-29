import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import Cart from "./pages/Cart/Cart";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/store' component={Shop} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
