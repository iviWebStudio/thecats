/**
 * Cart component.
 * @since 0.1.0
 */

import React from "react";
import "./cart.scss";

/**
 * Cart component.
 *
 * @param image
 * @return {JSX.Element}
 * @constructor
 */
const Cart = ({image}) => {
    const {url, width, height} = image;
    return <div className="col-md-6">
        <div className="image-box"><img src={url} width={width} height={height} alt="the cats"/></div>
    </div>;
};

export default Cart;
