import React from "react";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "5igmegb7kju8",
  accessToken: "9zVFMtfvqiTwUTyS2mpkhZluY7G-D6EIYor5aCWY2lk"
});

interface ItemProps {
    name: string;
    image: {
      file: {
        url: string;
      };
    };
    description: string;
    details: any;
    price: number;
    maker: string;
  }

const Items = ({ addToCart }: any) => {
    const [items, setItems] = React.useState<ItemProps[]>([]);
  
    React.useEffect(() => {
      client
        .getEntries<ItemProps>({
          content_type: "product"
        })
        .then((response:any) => setItems(response.items))
        .catch(console.error);
    }, []);
  
    console.log(items);
  
    return (
      <>
      </>
    );
  };
  
  export default Items;