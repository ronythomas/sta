import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import env from "./env";
import fetch from "node-fetch";
const query = `{
  status
}`;
function App() {
  const [nodeData, setNodeData] = useState();
  useEffect(() => {
    const { nodeApi } = env();
    if (!nodeData) {
      fetch(nodeApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }).then(async (res) => {
        const json = await res.json();
        console.log(json);
        setNodeData({ route: nodeApi, json });
      });
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>3M</p>

        <code>{nodeData && JSON.stringify(nodeData, null, 2)}</code>
      </header>
    </div>
  );
}

export default App;
