const path = require("path");
module.exports = [
  {
    type: "text",
    name: "name",
    message: "What is the name of the project?",
    default: path.basename(process.cwd()),
  },
  // {
  //   type: "rawlist",
  //   name: "framework",
  //   message: "Which framework?",
  //   choices: ["React", "Next"],
  // },
  {
    type: "confirm",
    name: "scss",
    message: "Do you need SCSS?",
    default: false,
  },
  {
    type: "confirm",
    name: "context",
    message: "Do you need context api(state management by react)?",
    default: false,
  },
  {
    type: "confirm",
    name: "router",
    message: "Do you need react-router-dom?",
    default: false,
  },
  {
    type: "confirm",
    name: "styled",
    message: "Do you need styled-component?",
    default: false,
  },
  {
    type: "confirm",
    name: "storybook",
    message: "Do you need storybook?",
    default: false,
  },
  {
    type: "confirm",
    name: "svgr",
    message: "Do you need svgr?",
    default: false,
  },
];
