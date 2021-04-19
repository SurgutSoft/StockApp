import React, {Component} from "react";
import {SidebarLink} from "./SidebarLink";
import {URLS} from "../../utils/constants/Urls";

import {ReactComponent as WorkIcon} from "../../assets/svg/work.svg";
import css from "./Sidebar.module.scss"


export default class Sidebar extends Component {
  render() {
    return (
      <div className={css.sidebarWrapper}>
        <div>
          {/* <IconWrapper>
          </IconWrapper> */}

          <div className={css.nameWrapper}>
            <div className={css.nameTitle}>HELLO WORLD</div>
          </div>

          <div className={css.sidebarDescription}>monitoring</div>
          <SidebarLink
            iconName={<WorkIcon />}
            text="Акции"
            path={URLS.stockList}
          // path={URLS.dashboard}
          // active={activePath}
          // setActive={this.setActive}
          />
          <div className={css.sidebarDescription}>something information</div>
          <SidebarLink
            //iconName="device_hub"
            text="что-то ещё"
            path={URLS.stockChart}
          />
          <div className={css.sidebarDescription}>something else</div>
          <SidebarLink
            //iconName="toggle_on"
            text="что-то ещё"
            path=""
          />
        </div>

        <div className={css.sidebarFooter}>
          { }
        </div>
      </div>
    );
  }
}
