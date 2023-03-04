import React from "react";
import emailjs from "emailjs-com";

import styles from "./Cart.module.css";

const Cart = ({ cart, setShowCart, removeFromCart }: any) => {
  const firstNameRef = React.useRef<any>(null);
  const lastNameRef = React.useRef<any>(null);
  const companyRef = React.useRef<any>(null);
  const emailRef = React.useRef<any>(null);
  const numberRef = React.useRef<any>(null);

  let total: number = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity * 6;
  }

  const orderTotal = `£${total}`;

  const sendCartData = () => {
    const cartData = cart
      .map(
        (item: any) =>
          `${item.name} x ${item.quantity * 6}), £${
            item.quantity * 6 * item.price
          }`
      )
      .join("\n");

    if (cart.length > 0) {
      emailjs
        .send(
          "service_3f9w4k3",
          "template_niyn4bz",
          {
            message: cartData,
            first: firstNameRef.current?.value,
            last: lastNameRef.current?.value,
            company: companyRef.current?.value,
            email: emailRef.current?.value,
            number: numberRef.current?.value,
            total: orderTotal,
          },
          "6wX2WN7sKCF7DMK3x"
        )
        .then((response) => {
          console.log("Email successfully sent!", response);
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.log("An error occurred while sending the email.", error);
        });
    } else {
      console.log("Cart is empty");
    }
  };

  return (
    <div className={styles.cart}>
      <h1>
        Current <span>Order</span>
      </h1>
      {cart.length > 0 ? (
        <h5 className="heading">Order Breakdown</h5>
      ) : (
        "Cart is empty"
      )}
      <ul>
        <>
          {cart.map((item: any, index: any) => (
            <li key={index}>
              <img src={item.image.fields.file.url} alt={"Item Image"} />
              <div>
                {item.name} (x {item.quantity})
              </div>
              <span>{item.maker}</span>

              <div style={{ marginTop: "12px" }}>
                £{item.quantity * 6 * item.price}
              </div>

              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </>
      </ul>
      <form className={styles.form}>
        <input type="text" placeholder="First Name" ref={firstNameRef} />
        <input type="text" placeholder="Last Name" ref={lastNameRef} />
        <input type="text" placeholder="Company" ref={companyRef} />
        <input type="email" placeholder="Email Address" ref={emailRef} />
        <input type="text" placeholder="Contact Number" ref={numberRef} />
        <h2>Order Total: £{total}</h2>

        <button className="form-button" onClick={sendCartData}>
          Place Order
        </button>
      </form>
      <div
        className={styles.closeBtn}
        onClick={() => {
          setShowCart(false);
        }}
      >
        x
      </div>
    </div>
  );
};

export default Cart;
