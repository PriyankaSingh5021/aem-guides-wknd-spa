import { MapTo } from "@adobe/cq-react-editable-components";
import React, { Component } from "react";

export const BannerConfig = {
  emptyLabel: "Banner component",

  isEmpty: function (props) {
    return !props || !props.title || props.title.trim().length < 1;
  },
};

export default class CustomBanner extends Component {
  render() {
    if(BannerConfig.isEmpty(this.props)) {
        return null;
    }

    return (
        <div className="CustomComponent">
            <h2 className="CustomComponent__message">{this.props.title}</h2>
        </div>
    );
}
}

MapTo("wknd-spa-react/components/custom-banner")(CustomBanner, BannerConfig);
