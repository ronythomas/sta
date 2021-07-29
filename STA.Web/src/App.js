import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import env from "./env";
import fetch from "node-fetch";

function App() {
  const [data, setData] = useState();
  const [sslData, setSslData] = useState();
  const [nodeData, setNodeData] = useState();
  useEffect(() => {
    const { api, sslApi, nodeApi } = env();
    if (!nodeData) {
      fetch(nodeApi).then(async (res) => {
        const text = await res.text();
        console.log(text);
        setNodeData({ route: nodeApi, text });
      });
    }

    if (!data) {
      fetch(`${sslApi}/test`).then(async (res) => {
        const text = await res.text();
        console.log(text);
        setData({ route: api, text });
      });
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>3M</p>

        <code>{data && JSON.stringify(data, null, 2)}</code>
        <code>{sslData && JSON.stringify(sslData, null, 2)}</code>
        <code>{nodeData && JSON.stringify(nodeData, null, 2)}</code>
      </header>
    </div>
  );
}

export default App;
