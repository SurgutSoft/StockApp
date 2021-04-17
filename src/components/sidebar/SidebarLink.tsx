import React from "react";
import {Link} from "react-router-dom";

import css from "./Sidebar.module.scss";

interface IProps {
  iconName?: string | JSX.Element, 
  text: string, 
  path: string, 
}

export const SidebarLink = ({iconName, text, path}: IProps) => {
  return (
    <Link
      className={css.linkWrapper}
      to={path}
      //linkactive={active === path ? 1 : 0}
      //onClick={() => setActive(path)}
    >
      <i className={css.iconDiv}>{iconName}</i>
      <span>{text}</span>
    </Link>
  );
};
