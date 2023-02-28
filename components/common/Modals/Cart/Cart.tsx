import React, { useState } from "react";
import emailjs from "emailjs-com";
import Heading from "../../Heading/Heading";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = ({ cart, setCart }: any) => {
  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const companyRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const numberRef = React.useRef(null);

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
            first: firstNameRef.current.value,
            last: lastNameRef.current.value,
            company: companyRef.current.value,
            email: emailRef.current.value,
            number: numberRef.current.value,
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
    <div className="container">
      <h1>Cart</h1>
      <p>
        <strong>Disclaimer:</strong> maximum amount of boxes of 6 bottles that
        can be on a pallet is 100 boxes total. minimum order of 20 boxes per
        winemaker.
        <br />
        <br />
        <strong>AWRS Number:</strong> XXAW00000118875
      </p>
      <ul>
        <>
          {cart.map((item: any, index: any) => (
            <li key={index}>
              <img src={item.image.fields.file.url} alt={name} />
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
      {cart.length > 0 ? (
        <h5 className="heading">Order Breakdown</h5>
      ) : (
        "cart is empty"
      )}
      <Heading text="Your Info" />

      <form className="form-container">
        <input
          type="text"
          className="form-field"
          placeholder="First Name"
          ref={firstNameRef}
        />
        <input
          type="text"
          className="form-field"
          placeholder="Last Name"
          ref={lastNameRef}
        />
        <input
          type="text"
          className="form-field"
          placeholder="Company"
          ref={companyRef}
        />
        <input
          type="email"
          className="form-field"
          placeholder="Email Address"
          ref={emailRef}
        />
        <input
          type="text"
          className="form-field"
          placeholder="Contact Number"
          ref={numberRef}
        />
        <h2>Order Total: £{total}</h2>

        <button className="form-button" onClick={sendCartData}>
          Place Order
        </button>
      </form>
      <Heading text="Order Total" />
    </div>
  );
};

export default Cart;
