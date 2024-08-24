import bootstrap from "/skills/bootstrap.svg";
import css from "/skills/css.svg";
import firebase from "/skills/firebase.svg";
import git from "/skills/git.svg";
import html from "/skills/html.svg";
import javascript from "/skills/javascript.svg";
import mongoDB from "/skills/mongoDB.svg";
import mysql from "/skills/mysql.svg";
import postgresql from "/skills/postgresql.svg";
import react from "/skills/react.svg";
import tailwind from "/skills/tailwind.svg";
import typescript from "/skills/typescript.svg";
import nodeJs from "/skills/nodejs.svg";
import expressJs from "/skills/expressjs.svg";
import aws from "/skills/aws.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react js":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "node js":
      return nodeJs;
    case "express js":
      return expressJs;
    case "aws":
      return aws;
    default:
      console.log(`No image found for skill: ${skillID}`);
      break;
  }
};
