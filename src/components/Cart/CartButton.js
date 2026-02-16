import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "../../store";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.totalQuantity);
  const show = useSelector((state) => state.showCart);

  const showCart = () => {
    dispatch(CartActions.showCart());
  };

  return (
    <button className={classes.button} onClick={showCart}>
      <span>{!show ? "Open" : "Close"} Cart</span>
      <span className={classes.badge}>{Cart}</span>
    </button>
  );
};

export default CartButton;
