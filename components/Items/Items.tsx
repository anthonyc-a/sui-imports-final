import React from "react";
import * as contentful from "contentful";
import Item from "./Item/Item";
import View from "./View/View";
import Heading from "../common/Heading/Heading";

import styles from "./Items.module.css";

const client = contentful.createClient({
  space: "5igmegb7kju8",
  accessToken: "9zVFMtfvqiTwUTyS2mpkhZluY7G-D6EIYor5aCWY2lk",
});

interface ItemProps {
  fields: {
    productName: string;
    productImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    description: string;
    details: any;
    price: number;
    winemaker: string;
    type: string;
    i: any;
  };
}

interface ItemsProps {
  items: ItemProps[];
  addToCart: any;
  removeFromCart: any;
}

const Items: React.FC<ItemsProps> = ({ items, addToCart }) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const selectedItem = items[selected];

  return (
    <div className={styles.itemsContain}>
      <Heading text="Neyroud" />
      <div className={styles.items}>
        {items.map(
          (item, i) =>
            item.fields.winemaker === "Neyroud" && (
              <>
                <div
                  className={styles.itemContain}
                  onClick={() => {
                    setShowDetails(true);
                    setSelected(i);
                  }}
                >
                  <Item
                    key={item.fields.productName}
                    name={item.fields.productName}
                    image={item.fields.productImage}
                    price={item.fields.price}
                    maker={item.fields.winemaker}
                    i={i}
                  />
                </div>
                {showDetails && (
                  <>
                    <div
                      className={styles.viewBg}
                      onClick={() => {
                        setShowDetails(false);
                      }}
                    />
                    <div className={styles.itemView}>
                      <View
                        key={selectedItem.fields.productName}
                        name={selectedItem.fields.productName}
                        maker={selectedItem.fields.winemaker}
                        type={selectedItem.fields.wineType}
                        awards={selectedItem.fields.awards}
                        image={selectedItem.fields.productImage}
                        description={selectedItem.fields.productDescription}
                        price={selectedItem.fields.price}
                        details={setShowDetails}
                        addToCart={addToCart}
                        i={i}
                      />

                      <div
                        className={styles.close}
                        onClick={() => {
                          setShowDetails(false);
                        }}
                      >
                        Close
                      </div>
                    </div>
                  </>
                )}
              </>
            )
        )}
      </div>
      <Heading text="Jean-Marc Favez" />

      <div className={styles.items}>
        {items.map(
          (item, i) =>
            item.fields.winemaker === "Jean-Marc Favez" && (
              <>
                <div
                  className="item-contain"
                  onClick={() => {
                    setShowDetails(true);
                    setSelected(i);
                  }}
                >
                  <Item
                    key={item.fields.productName}
                    name={item.fields.productName}
                    image={item.fields.productImage}
                    price={item.fields.price}
                    maker={item.fields.winemaker}
                    i={i}
                  />
                </div>
              </>
            )
        )}
      </div>
      <Heading text="Francey" />

      <div className={styles.items}>
        {items.map(
          (item, i) =>
            item.fields.winemaker === "Francey" && (
              <>
                <div
                  className="item-contain"
                  onClick={() => {
                    setShowDetails(true);
                    setSelected(i);
                  }}
                >
                  <Item
                    key={item.fields.productName}
                    name={item.fields.productName}
                    image={item.fields.productImage}
                    price={item.fields.price}
                    maker={item.fields.winemaker}
                    i={i}
                  />
                </div>
              </>
            )
        )}
      </div>
      <Heading text="Monachon" />

      <div className={styles.items}>
        {items.map(
          (item, i) =>
            item.fields.winemaker === "Monachon" && (
              <>
                <div
                  className="item-contain"
                  onClick={() => {
                    setShowDetails(true);
                    setSelected(i);
                  }}
                >
                  <Item
                    key={item.fields.productName}
                    name={item.fields.productName}
                    image={item.fields.productImage}
                    price={item.fields.price}
                    maker={item.fields.winemaker}
                    i={i}
                  />
                </div>
              </>
            )
        )}
      </div>
      <Heading text="Château d'Eclepens" />

      <div className={styles.items}>
        {items.map(
          (item, i) =>
            item.fields.winemaker === "Château d'Eclepens" && (
              <>
                <div
                  className="item-contain"
                  onClick={() => {
                    setShowDetails(true);
                    setSelected(i);
                  }}
                >
                  <Item
                    key={item.fields.productName}
                    name={item.fields.productName}
                    image={item.fields.productImage}
                    price={item.fields.price}
                    maker={item.fields.winemaker}
                    i={i}
                  />
                </div>
              </>
            )
        )}
      </div>
      <Heading text="Domaine Mermetus" />

      <div className={styles.items}>
        {items.map(
          (item, i) =>
            item.fields.winemaker === "Domaine Mermetus" && (
              <>
                <div
                  className="item-contain"
                  onClick={() => {
                    setShowDetails(true);
                    setSelected(i);
                  }}
                >
                  <Item
                    key={item.fields.productName}
                    name={item.fields.productName}
                    image={item.fields.productImage}
                    price={item.fields.price}
                    maker={item.fields.winemaker}
                    i={i}
                  />
                </div>
              </>
            )
        )}
      </div>
      <Heading text="Domaine des Sieurs" />

      <div className={styles.items}>
        {items.map(
          (item, i) =>
            item.fields.winemaker === "Domaine des Sieurs" && (
              <>
                <div
                  className="item-contain"
                  onClick={() => {
                    setShowDetails(true);
                    setSelected(i);
                  }}
                >
                  <Item
                    key={item.fields.productName}
                    name={item.fields.productName}
                    image={item.fields.productImage}
                    price={item.fields.price}
                    maker={item.fields.winemaker}
                    i={i}
                  />
                </div>
              </>
            )
        )}
      </div>
    </div>
  );
};

const ItemsAll = () => {
  const [items, setItems] = React.useState<ItemProps[]>([]);

  React.useEffect(() => {
    client
      .getEntries<ItemProps>({
        content_type: "product",
      })
      .then((response: any) => setItems(response.items))
      .catch(console.error);
  }, []);

  console.log(items);

  return (
    <>
      <Items items={items} />
    </>
  );
};

export default ItemsAll;
