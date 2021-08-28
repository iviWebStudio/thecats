/**
 * Single category content wrapper.
 *
 * @since 0.1.0
 */

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import Cart from "../Cart";
import {getImages, getMoreImages} from "../../store/imagesSlice";

/**
 * Category component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const CategoryContent = () => {
    let dispatch = useDispatch();
    let imagesState = useSelector((state) => state.images);
    let categoryState = useSelector((state) => state.categories);

    let {images, isLoading, page} = imagesState;
    let {categoryID} = useParams();
    let CategoryName = categoryState.categories.find(el => +categoryID === +el.id);

    useEffect(() => {
        dispatch(getImages(1, categoryID));
    }, [categoryID]);

    const loadMore = () => {
        dispatch(getMoreImages(page, categoryID));
        return setTimeout(function () {
            window.scrollTo(0, document.body.scrollHeight);
        }, 500)
    }

    return (
        <div className="container">
            <h2>Category {CategoryName?.name}</h2>
            <div className="imagesList">
                {(isLoading && <Skeleton count={Math.ceil(window.outerHeight / 450)} height={250}/>) ||
                (images && Array.isArray(images) &&
                    (<div className="row">
                        {images.map((image) => <Cart key={image.id} image={image}/>)}
                    </div>)
                ) || (<p>No images found</p>)}
                {!isLoading && <button type="button" onClick={_ => loadMore()}>load more</button>}
            </div>
        </div>
    )
}

export default CategoryContent;