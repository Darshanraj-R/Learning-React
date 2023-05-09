import React  from "react";
import ReactDOM from "react-dom/client"
import Header from "./Componets/Header";

const root = ReactDOM.createRoot(document.getElementById("root"))

//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const div = React.createElement("div",{class:"title",},[
    (
        React.createElement("h1",{},"this is header 1")
    )
,
(
        React.createElement("h2",{},"this is header 2")
),
(
    React.createElement("h2",{},"this is header 3")
)])

const Div1 = () => {
    
    return(  <div>
        <h1 key="h1">the header 1</h1>
        <h2 key = "h2">the header 2</h2>
        </div>
        )
}

const Div = () => {
    
    return(  <div>
        {<Div1/>}
        <h1 key="h1">the header 1</h1>
        <h2 key = "h2">the header 2</h2>
        </div>
        )
}


const App = () => {
       return <Header/>
}

root.render(<App/>)