import classes from "src/components/layout/layout.module.scss";

export const Layout = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};
