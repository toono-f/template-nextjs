export const Picture = (props) => {
  const { className, children, src, alt = "", width = src.width, height = src.height, decoding = "async", lazy } = props;
  return (
    <picture className={className}>
      {children}
      <img src={src} alt={alt} width={width} height={height} decoding={decoding} loading={lazy && "lazy"} />
    </picture>
  );
};

// 画像を最適化しない場合
// import { basePath } from "src/hooks/basePath";
// export const Picture = (props) => {
//   const path = basePath();
//   return (
//     <picture className={props.class}>
//       {props.children}
//       <img src={`${path}/${props.src}`} alt={props.alt} />
//     </picture>
//   );
// };
