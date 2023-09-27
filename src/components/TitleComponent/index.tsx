import { TitleInterface } from "./interface";

const TitleComponent = ({ type, text }: TitleInterface) => {

  const dectectorTitle = () => {
    switch (type) {
      case "h1":
        return <h1>{text}</h1>;
        break;
      case "h2":
        return <h2>{text}</h2>;
        break;
      case "h3":
        return <h3>{text}</h3>;
        break;
    }
  };
  return <>{dectectorTitle()}</>;
};

export default TitleComponent;
