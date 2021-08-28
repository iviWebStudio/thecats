/**
 * Main content wrapper component.
 *
 * @since 0.1.0
 */

import React from "react";
import {Route, Switch} from "react-router-dom";
import routes from "../../app/routes";

/**
 * Content component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const Content = () => {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}

export default Content