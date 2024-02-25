import "./cart-icon.styles.scss";

/* now notice how we are importing the shopping bag svg icon */
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
/* now this setIsCartOpen functionality was not working in the naviation compo
where we have imported this CartIcon compo so we will be doing it here let's see*/
 const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

 const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

 /* yes it is working here */

return (
<div onClick={toggleIsCartOpen} className="cart-icon-container">
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{cartCount}</span>
</div>
);
}


export default CartIcon;