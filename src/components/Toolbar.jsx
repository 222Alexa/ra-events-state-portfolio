import React from "react";
import PropTypes from "prop-types";
const USID = require("usid");
const usid = new USID();

export default function Toolbar(props) {
  if (!props) {
    console.log("потрачено...");
    return;
  }
  const { filters, selected, onSelectFilter } = props;

  const btnsArr = [];

  filters.map((filter) => {
    const classActive = filter === selected ? " active" : "";
    const btn = (
      <button
        key={usid.rand()}
        className={"toolbar-item" + classActive}
        onClick={onSelectFilter}
      >
        {filter}
      </button>
    );
    return btnsArr.push(btn);
  });

  return <div className={"button-block"}>{btnsArr}</div>;
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};
