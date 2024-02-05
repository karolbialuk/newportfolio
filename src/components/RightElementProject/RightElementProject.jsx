import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import "./RightElementProject.scss";

const RightElementProject = ({ item }) => {
  const { img, name, text, technologies, githubHref, projectHref } = item;
  return (
    <div className="rightelementproject__elements-container">
      <div className="rightelementproject__element">
        <div className="rightelementproject__element-img-container">
           <img src={img} alt="project1" />
        </div>
        <div className="rightelementproject__element-text-container">
          <div className="rightelementproject__element-text-header">
            <h2>Featured Project</h2>
            <h1>{name}</h1>
          </div>
          <div className="rightelementproject__element-text-p-container">
            <p>{text}</p>
          </div>
          <div className="rightelementproject__element-technologies-container">
            {technologies.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
          <div className="rightelementproject__element-links">
            <a href={githubHref}>
              <RiGithubLine />
            </a>
	    <a href={projectHref}>
	      <FiExternalLink />
	    </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightElementProject;
