import ContentWrap from "../ContentWrap";
import style from "./styles.module.css";
const HeaderComponent = () => {
  return (
    <>
      <div className={style.header}>
        <ContentWrap>
          <div className={style.headerContent}>
            <div className={style.headerData}>
              <div>
                <img src={"/fluent_checkmark-starburst-20-regular.svg"} />
              </div>
              <p>30-DAY SATISFACTION GUARANTEE</p>
            </div>
            <div className={style.headerData}>
              <div>
                <img src={"/ph_truck-light.svg"} />
              </div>
              <p>Free delivery on orders over $40.00</p>
            </div>
            <div className={style.headerData}>
              <div>
                <img src={"/mdi_cards-heart-outline.svg"} />
              </div>
              <p>50.000+ HAPPY CUSTOMERS</p>
            </div>
            <div className={style.headerData}>
              <div>
                <img src={"/fluent_arrow-sync-checkmark-20-regular.svg"} />
              </div>
              <p>100% Money Back Guarantee</p>
            </div>
          </div>
        </ContentWrap>
      </div>
    </>
  );
};

export default HeaderComponent;
