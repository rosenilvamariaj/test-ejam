import style from "./style.module.css";
const ProductTitle = ({
  title,
  type,
}: {
  title: JSX.Element;
  type: "h1" | "h2";
}) => {
  return (
    <>
      <span className={style.productTitle}>
        {type === "h1" && <h1>{title}</h1>}
        {type === "h2" && <h2>{title}</h2>}
      </span>
    </>
  );
};

export default ProductTitle;
