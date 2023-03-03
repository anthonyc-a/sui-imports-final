import React, { useEffect, useRef, useState } from "react";
import VinesOne from "../components/common/Illustrations/VinesOne";
import VinesTwo from "../components/common/Illustrations/VinesTwo";
import Items from "../components/Items/Items";
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

  const [passRef, setPassRef] = useState("");

  const userRef = useRef();
  const passwordRef = useRef();

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem, e: any) => {
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

  useEffect(() => {
    setPassRef(passwordRef.current);
  }, [passwordRef]);

  if (signedIn === true)
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

          <Items addToCart={addToCart} removeFromCart={removeFromCart} />
        </Layout>
        <VinesOne />
        <VinesTwo />
      </div>
    );
  if (signedIn === false)
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
          <p>No sign in credentials? <strong><a href="mailto:hello@mail.com">Contact us</a></strong> if you wish to partner and order from our exclusive wine portolio. Our team will respond to your message and send you the login information</p>
        </Layout>
        <VinesOne />
        <VinesTwo />
      </div>
    );
};

export default Portfolio;
