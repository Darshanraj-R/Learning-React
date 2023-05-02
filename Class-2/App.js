import React  from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))
const heading1 = React.createElement("h1",{},"the name is darshan")
const heading2 = React.createElement("h2",{},"i Know this is the most amzing thing you have encoutred")

const div = React.createElement("div", {id:"container"},[heading1,heading2] )

root.render(div)