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

  return (
    <div className={"projectList-wrap"}>
      <ul className="projects-list">
        {projects.items.map((elem) => {
          return (
            <li className={"list-item"} key={usid.rand()}>
              {ProjectItem(elem)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ProjectList.propTypes = {
  items: PropTypes.array.isRequired,
};
