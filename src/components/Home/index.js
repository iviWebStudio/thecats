/**
 * Home component.
 * @since 0.1.0
 */

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Cart from "../Cart";
import {getImages, getMoreImages} from "../../store/imagesSlice";

/**
 * Home component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const Home = () => {
    const dispatch = useDispatch();
    const imagesState = useSelector((state) => state.images);
    const {images, isLoading, page} = imagesState;


    useEffect(() => {
        dispatch(getImages());
    }, []);

    const loadMore = () => {
        dispatch(getMoreImages(page));
        return setTimeout(function () {
            window.scrollTo(0, document.body.scrollHeight);
        }, 500)
    }

    return (
        <div className="container">
            <h2>The cats</h2>
            <div className="imagesList">
                {(isLoading && <div>Loading...</div>) ||
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

export default Home;