import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import Cart from "./pages/Cart/Cart";
import FlowerDetails from "./pages/FlowerDetails/FlowerDetails";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/cart' component={Cart} />
                    <Route exact path='/store' component={Shop} />
                    <Route exact path='/store/:flowerID' component={FlowerDetails} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
