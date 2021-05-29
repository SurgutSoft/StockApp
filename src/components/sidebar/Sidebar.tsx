import React from "react";
import {SidebarLink} from "./SidebarLink";
import {URLS} from "../../utils/constants/Urls";

import {ReactComponent as WorkIcon} from "../../assets/svg/work.svg";
import css from "./Sidebar.module.scss"

interface IProps {
  isMobile: boolean;
}

export const Sidebar = ({isMobile}: IProps) => {
  return (
    <div className={isMobile ? css.sidebarWrapperMobile : css.sidebarWrapperDesktop}>
      <div className={isMobile ? css.flexMobileWrapper : undefined}>
        <div className={css.nameWrapper}>
          <span className={css.nameTitle}>Stock app</span>
        </div>

        <div className={isMobile ? css.linksWrapper : undefined}>
          <SidebarLink
            iconName={<WorkIcon />}
            text="Акции"
            path={URLS.stockList}
          />


          <SidebarLink
            text="Статистика"
            path={URLS.statistics}
          />

          <SidebarLink
            text="О&nbsp;сервисе"
            path={URLS.about}
          />

          <SidebarLink
            text="авторизоваться"
            path=""
          />
        </div>
      </div>

      <div className={css.sidebarFooter}>
        {}
      </div>
    </div>
  );
}
