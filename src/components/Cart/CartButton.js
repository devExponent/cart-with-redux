import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const Cart = useSelector((state) => state.totalQuantity);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{Cart}</span>
    </button>
  );
};

export default CartButton;
