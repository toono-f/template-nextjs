const breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
};

const point = (value) => {
  switch (value) {
    case "sm":
      return `(max-width: ${breakpoint.sm - 1}px)`;
    case "md":
      return `(max-width: ${breakpoint.md - 1}px)`;
    case "lg":
      return `(max-width: ${breakpoint.lg - 1}px)`;
    default:
      break;
  }
};

const webp = (type) => {
  return type.endsWith("webp") ? "image/webp" : null;
};

export const Source = (props) => {
  const { srcset, media } = props;
  return <source srcSet={srcset} media={point(media)} type={webp(srcset.src)} />;
};

// 画像を最適化しない場合
// import { basePath } from "src/hooks/basePath";
// export const Source = (props) => {
//   return <source srcSet={basePath() + `/${props.srcset}`} media={point(props.media)} type={webp(props.srcset)} />;
// };
