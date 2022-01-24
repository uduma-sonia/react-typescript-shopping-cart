import CartItem from "../CartItem/CartItem";
import { productType } from "../App";

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: productType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <div>
      <h2>YOUR SHOPPING CART</h2>

      {cartItems.length == 0 ? <p>No items in cart</p> : null}

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}

      <h2>TOTAL: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </div>
  );
};

type Props = {
  cartItems: productType[];
  addToCart: (clickedItem: productType) => void;
  removeFromCart: (id: number) => void;
};

export default Cart;
