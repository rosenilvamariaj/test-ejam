import TitleComponent from "@/components/TitleComponent";
import ProductPlaceHolder from "../components/ProductPlaceHolder";
import style from "./style.module.css";
import ProductTitle from "../components/ProductTitle";
const SingleProductTemplate = ({ product }: any) => {

  return (
    <div>
      <div className={style.bodyContent}>
        <div className={`${style.grid} ${style.gridTemplateColumns2}`}>
          <div className={style.placeHolderWrap}>
            <ProductPlaceHolder
              image={product.image}
              description={product.description}
            />
          </div>
          <div> 
            <ProductTitle
              title={
                <>
                  <span>ONE TIME ONLY</span> special price for 6 extra Clarifion
                  for only <span>$14 each</span> ($84.00 total!)
                </>
              }
              type="h1"
            />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductTemplate;
