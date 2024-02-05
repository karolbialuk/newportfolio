import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import "./LeftElementProject.scss";

const LeftElementProject = ({ item }) => {
  const { img, name, text, technologies, githubHref, projectHref } = item;
  return (
    <div className="leftelementproject__elements-container">
      <div className="leftelementproject__element">
        <div className="leftelementproject__element-text-container">
          <div className="leftelementproject__element-text-header">
            <h2>Featured Project</h2>
            <h1>{name}</h1>
          </div>
          <div className="leftelementproject__element-text-p-container">
            <p>{text}</p>
          </div>
          <div className="leftelementproject__element-technologies-container">
            {technologies.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
          <div className="leftelementproject__element-links">
	    <a href={projectHref}>
             <FiExternalLink />
            </a>
	    <a href={githubHref}>
	     <RiGithubLine />
	    </a>
          </div>
        </div>
        <div className="leftelementproject__element-img-container">
          <img src={img} alt="project1" />
        </div>
      </div>
    </div>
  );
};

export default LeftElementProject;
