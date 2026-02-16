import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store";

const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;
  const total = quantity * price;

  const dispatch = useDispatch();

  const increaseQty = () => {
    dispatch(CartActions.increaseQty({ id }));
  };

  const decreaseQty = () => {
    dispatch(CartActions.decreaseQty({ id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQty}>-</button>
          <button onClick={increaseQty}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
