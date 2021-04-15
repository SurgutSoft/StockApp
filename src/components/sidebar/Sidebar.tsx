import React, {Component} from "react";
import {SidebarLink} from "./SidebarLink";

import css from "./Sidebar.module.scss"
import {URLS} from "../../utils/constants/Urls";

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
            //iconName="history"
            text="Dashboard"
            path={URLS.dashboard}
            // path={URLS.dashboard}
            // active={activePath}
            // setActive={this.setActive}
          />
          <div className={css.sidebarDescription}>something information</div>
          <SidebarLink
            //iconName="device_hub"
            text="Participants"
            path=""
          />
          <div className={css.sidebarDescription}>something else</div>
          <SidebarLink
            //iconName="toggle_on"
            text="Control mode"
            path=""
          />
        </div>

        <div className={css.sidebarFooter}>
          {}
        </div>
      </div>
    );
  }
}
