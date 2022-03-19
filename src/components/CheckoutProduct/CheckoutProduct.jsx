import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";
import StarRateSharpIcon from "@mui/icons-material/StarRateSharp";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      {/* container helps images remain the same size */}
      <div className="checkoutProduct__imageContainer">
        <img src={image} className="checkoutProduct__image" />
      </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateSharpIcon className="product__starIcon" />
            ))}
        </p>
        {/* only render button if its not hidden | dont show button on orders screen */}
        {!hideButton && <button onClick={removeFromCart}>Delete</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
