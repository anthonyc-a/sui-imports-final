import React, { useEffect, useRef, useState } from "react";
import Cart from "../components/Cart/Cart";
import VinesOne from "../components/common/Illustrations/VinesOne";
import VinesTwo from "../components/common/Illustrations/VinesTwo";
import ItemsAll from "../components/Items/Items";
import Layout from "../components/Layout/Layout";

import styles from "../styles/portfolio.module.css";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Portfolio = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (showCart) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showCart]);

  const userRef = useRef();
  const passwordRef = useRef();

  const [cart, setCart] = useState<CartItem[]>([]);
  console.log(cart);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleSignIn = () => {
    if (passwordRef.current.value === "123") {
      setSignedIn(true);
    } else null;
  };

  if (signedIn === true) {
    return (
      <div className="container">
        <Layout
          title="Portfolio"
          cart={cart}
          setShowCart={setShowCart}
          showCart={showCart}
        >
          <h1>
            Our <span>Selection</span>{" "}
          </h1>
          <h3
            className={styles.cartBtn}
            onClick={() => {
              setShowCart(true);
            }}
          >
            Cart ({cart.length})
          </h3>
          <p>
            Disclaimer: maximum amount of boxes of 6 bottles that can be on a
            pallet is 100 boxes total. minimum order of 20 boxes per winemaker.
          </p>

          <ItemsAll cart={cart} addToCart={addToCart} />
          {showCart && (
            <Cart
              cart={cart}
              setShowCart={setShowCart}
              removeFromCart={removeFromCart}
            />
          )}
        </Layout>
        <VinesOne />
        <VinesTwo />
      </div>
    );
  }

  if (signedIn === false) {
    return (
      <div className="container">
        <Layout
          title="Portfolio"
          cart={cart}
          setShowCart={setShowCart}
          showCart={showCart}
        >
          <h1>
            Members <span>Sign In</span>{" "}
          </h1>

          <form className={styles.form}>
            <input type="text" placeholder="Username" ref={userRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button onClick={handleSignIn}>Submit</button>
          </form>
          <p className={styles.disclaimer}>
            No sign in credentials?{" "}
            <strong>
              <a href="mailto:sui-wineimports@protonmail.com">Contact us</a>
            </strong>{" "}
            if you wish to partner and order from our exclusive wine portolio.
            Our team will respond to your message and send you the login
            information.
          </p>
        </Layout>
        <VinesOne />
        <VinesTwo />
      </div>
    );
  }
};

export default Portfolio;
