import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);

  console.log("items no.", cartItems.length);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
