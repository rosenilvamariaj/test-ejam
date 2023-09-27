import Image from "next/image";

const ProductPlaceHolder = ({image, description}:any) => {
    console.log(image);
  return (
    <div className="product-placeholder">
        <Image src={image} alt={description} width={575} height={591}  />
    </div>
  );
};

export default ProductPlaceHolder;
