import { basePath } from "src/hooks/basePath";

export const Picture = (props) => {
  return (
    <picture className={props.class}>
      {props.children}
      <img src={basePath() + `/${props.src}`} alt={props.alt} />
    </picture>
  );
};
