import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/store' component={Shop} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
