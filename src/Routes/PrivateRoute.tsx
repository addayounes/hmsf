import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps, StaticContext } from "react-router";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { RootState } from "../redux/store";

interface PrivateRouteProps extends RouteProps {
    component: React.FC<
        RouteComponentProps<
            {
                [x: string]: string | undefined;
            },
            StaticContext,
            unknown
        >
    >;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    const isLogged = useSelector((state: RootState) => state.userReducer.isLogged);

    return (
        <Route
            {...rest}
            render={(props) =>
                isLogged ? <Component {...props} /> : <Redirect exact to='/login' />
            }
        />
    );
};

export default PrivateRoute;
