import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Markdown from "../src/component/Markdown.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Markdown/>
  </React.StrictMode>,
)
