import React from "react"
import react from "react"
import reactDom from "react-dom"
import TodoContainer from "./components/TodoContainer"
//reactDom.render(<TodoContainer/>, document.getElementById("root"))
const element = <h1>I am practising react app creation</h1>
reactDom.render(<React.StrictMode><TodoContainer/></React.StrictMode>, document.getElementById("root"))
