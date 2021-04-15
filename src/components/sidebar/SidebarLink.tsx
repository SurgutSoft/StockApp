import React from "react";
import {Link} from "react-router-dom";

import css from "./Sidebar.module.scss";

interface IProps {
  iconName?: string, 
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
      <i className="material-icons-outlined">{iconName}</i>
      <span>{text}</span>
    </Link>
  );
};

// SidebarLink.propTypes = {
//   iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   text: PropTypes.string,
//   path: PropTypes.string,
//   active: PropTypes.string
// };

// const Icon = styled.i`
//   color: var(--text-secondary-light);
//   font-size: 20px;
//   padding-right: 10px;
// `;

// const LinkStyle = styled(Link)`
//   color: var(--text-secondary);
//   background: ${props => (props.linkactive ? "var(--sidebar-hover)" : "none")};
//   font-size: 14px;
//   line-height: 19px;
//   display: flex;
//   width: 100%;
//   padding: 9px 50px;
//   cursor: pointer;
//   font-weight: ${props => (props.linkactive ? "bold" : "normal")};
//   &:hover {
//     font-weight: bold;
//     color: var(--text-secondary);
//     background: var(--sidebar-hover);
//     ${Icon} {
//       color: var(--text-secondary);
//     }
//   }
// `;
