import React from "react";
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

/**
 * формирует список из картинок и отображает его
 */
export default function ProjectList(props) {
  const projects = props;

  if (!props) {
    console.log("Нет проектов...");
    return null;
  }

  const items = [];

  projects.items.forEach((elem) => {
    const item = (
      <li className={"list-item"} key={usid.rand()}>
        {ProjectItem(elem)}
      </li>
    );
    items.push(item);
  });

  return (
    <div className={"projectList-wrap"}>
      <ul className="projects-list">{items}</ul>
    </div>
  );
}

ProjectList.propTypes = {
  items: PropTypes.array.isRequired,
};
