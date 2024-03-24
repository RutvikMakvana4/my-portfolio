import bootstrap from '/public/skills/bootstrap.svg';
import css from '/public/skills/css.svg';
import firebase from '/public/skills/firebase.svg';
import git from '/public/skills/git.svg';
import html from '/public/skills/html.svg';
import javascript from '/public/skills/javascript.svg';
import mongoDB from '/public/skills/mongoDB.svg';
import mysql from '/public/skills/mysql.svg';
import nextJS from '/public/skills/nextJS.svg';
import postgresql from '/public/skills/postgresql.svg';
import react from '/public/skills/react.svg';
import tailwind from '/public/skills/tailwind.svg';
import typescript from '/public/skills/typescript.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
        return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    default:
      break;
  }
}
