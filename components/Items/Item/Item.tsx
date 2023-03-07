import React from "react";

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
  price: number;
  maker: string;
  i: number;
}

const Item: React.FC<ItemProps> = ({ name, image, price }) => {
  return (
    <div className={styles.item}>
      <img src={image.fields.file.url} alt={name} />
      <h5>{name}</h5>
      <span>£{price.toFixed(2)}</span>
    </div>
  );
};

export default Item;
