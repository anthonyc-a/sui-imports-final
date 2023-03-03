import styles from "./Cart.module.css";

const Cart = ({ cart, setShowCart }: any) => {
  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      <div
        onClick={() => {
          setShowCart(false);
        }}
      >
        close
      </div>
      
    </div>
  );
};

export default Cart;
