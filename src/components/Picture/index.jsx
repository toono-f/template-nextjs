export const Picture = (props) => {
  const { className, children, src, alt = "", decoding = "async", lazy } = props;
  return (
    <picture className={className}>
      {children}
      <img src={src} alt={alt} width={src.width} height={src.height} decoding={decoding} loading={lazy && "lazy"} />
    </picture>
  );
};

// 画像を最適化しない場合
// import { basePath } from "src/hooks/basePath";
// export const Picture = (props) => {
//   return (
//     <picture className={props.class}>
//       {props.children}
//       <img src={basePath() + `/${props.src}`} alt={props.alt} />
//     </picture>
//   );
// };
