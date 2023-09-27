import SingleProductTemplate from "@/store/products/SingleProductTemplate";
import ContentWrap from "../ContentWrap";
import TitleComponent from "../TitleComponent";
import { useMemo } from "react";

const BodyComponent = () => {
  const myProduct =  {
    name: "Product Name",
    description: "Product Description",
    price: "Product Price",
    image: '/imageProduct.png',
  };

  return (
    <>
      <ContentWrap>
        <SingleProductTemplate product={myProduct} />
      </ContentWrap>
    </>
  );
};

export default BodyComponent;
