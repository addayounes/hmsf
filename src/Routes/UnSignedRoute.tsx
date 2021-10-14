import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps, StaticContext } from "react-router";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { RootState } from "../redux/store";

interface UnSignedRouteProps extends RouteProps {
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

const UnSignedRoute: React.FC<UnSignedRouteProps> = ({ component: Component, ...rest }) => {
    const isLogged = useSelector((state: RootState) => state.userReducer.isLogged);

    return (
        <Route
            {...rest}
            render={(props) => (isLogged ? <Redirect exact to='/' /> : <Component {...props} />)}
        />
    );
};

export default UnSignedRoute;
