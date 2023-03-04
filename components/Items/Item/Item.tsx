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
  description: string;
  details: any;
  price: number;
  maker: string;
}

const Item: React.FC<ItemProps> = ({ name, image, price, maker }) => {
  return (
    <div className={styles.item}>
      <img src={image.fields.file.url} alt={name} />
      <h5>{name}</h5>
      <span>£{price.toFixed(2)}</span>
    </div>
  );
};

export default Item;
