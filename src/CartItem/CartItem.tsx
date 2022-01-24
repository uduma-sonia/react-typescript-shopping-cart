import { productType } from "../App";

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div>
    <h3>{item.title}</h3>
    <p>Price: {item.price}</p>
    <p>total: {(item.amount * item.price).toFixed(2)}</p>

    <div>
      <button onClick={() => removeFromCart(item.id)}>-</button>
      <p>{item.amount}</p>

      <button onClick={() => addToCart(item)}>+</button>
    </div>
  </div>
);

export default CartItem;

type Props = {
  item: productType;
  addToCart: (clickedItem: productType) => void;
  removeFromCart: (id: number) => void;
};
