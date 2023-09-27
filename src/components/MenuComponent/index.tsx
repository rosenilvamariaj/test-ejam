import ContentWrap from "../ContentWrap";
import style from "./style.module.css";
import Image from "next/image";
const MenuComponent = () => {
  return (
    <div className={style.menu}>
      <ContentWrap>
        <>
          <div className={style.menuContent}>
            <div>
              <Image
                width={192}
                height={36}
                src={"/Clarifion_Logo.png"}
                alt="Clarifion_Logo"
              />
            </div>
            <div className={style.menuSecureLogos}>
              <Image
                width={82}
                height={32}
                src={"/nortonAntivirus.png"}
                alt="Clarifion_Logo"
              />
              <Image
                width={82}
                height={32}
                src={"/MCAfeeSecure.png"}
                alt="menuContent"
              />
            </div>
          </div>
        </>
      </ContentWrap>
    </div>
  );
};

export default MenuComponent;
