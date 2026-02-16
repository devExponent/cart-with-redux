import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const shopCart = useSelector((state) => state.shopCart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {shopCart.map((carts) => (
          <li key={carts.id}>
            <CartItem
              item={{
                title: carts.title,
                quantity: carts.quantity,
                total: 18,
                price: carts.price,
              }}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
