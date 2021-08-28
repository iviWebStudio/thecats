/**
 * Routes for application.
 * @since 0.1.0
 */

import Home from "../components/Home";
import CategoryContent from "../components/Category";
import NotFount from "../components/NotFound";

const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/category/:categoryID",
        component: CategoryContent,
    },
    {
        path: "*",
        component: NotFount
    }
];

export default routes;