import React from "react";
import VinesOne from "../../common/Illustrations/VinesOne";

import styles from "../Items.module.css";

interface ItemProps {
  name: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  description: string;
  details: any;
  price: number;
  maker: string;
  awards: string;
  addToCart: any;
  type: string;
}

const View: React.FC<ItemProps> = ({
  name,
  image,
  price,
  maker,
  type,
  description,
  awards,
  addToCart,
  details,
}) => {
  const [quantity, setQuantity] = React.useState(1);
  console.log(addToCart);

  return (
    <div className={styles.view}>
      <img src={image.fields.file.url} alt={name} />
      <div className={styles.viewContent}>
        <h2>{name}</h2>
        <div className={styles.viewContent}>
          <h3>
            {maker} - {type}
          </h3>
        </div>
        <p className={styles.award}>{awards}</p>
      </div>
      <div className={styles.viewContent}>
        <p>{description}</p>
        <div className={styles.quantityControl}>
          <span>£{price.toFixed(2)}</span>
          <button
            className={styles.smBtn}
            onClick={() => {
              quantity > 1 && setQuantity(quantity - 1);
            }}
          >
            -
          </button>
          {quantity} ({quantity > 1 ? "boxes" : "box"} of 6)
          <button
            className={styles.smBtn}
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={() => [
            details(false),
            addToCart({
              name: name,
              price: price.toFixed(2),
              quantity: quantity,
              image: image,
              maker: maker,
            }),
          ]}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default View;
