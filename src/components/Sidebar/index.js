/**
 * Sidebar wrapper component.
 *
 * @since 0.1.0
 */

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import './sidebar.scss'
import {getCategories} from "../../store/categoriesSlice";

/**
 * Sidebar component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const Sidebar = () => {
    let dispatch = useDispatch();
    let categoryState = useSelector((state) => state.categories);
    let {categories, isLoading, error} = categoryState;

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <aside>
            <h3>Categories</h3>
            <div className="categoriesList">
                {(isLoading && <Skeleton count={4} height={40}/>) ||
                (categories &&
                    Array.isArray(categories) &&
                    categories.map((cat) => (
                        <NavLink
                            className="navlink"
                            key={cat.id}
                            to={`/category/${cat.id}`}
                        >
                            {cat.name.toUpperCase()}
                        </NavLink>
                    ))) || <p>No categories found</p>}
            </div>
        </aside>
    );
}

export default Sidebar