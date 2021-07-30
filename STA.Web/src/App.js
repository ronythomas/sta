import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import env from "./env";
import fetch from "node-fetch";
const query = `{
  status
  docusignAuthUrl
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
          authorization: `yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ogX65Oh9_4LuvziijgQbFU5sdNTS6wKDh2qMK8KyHMk`,
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
        {nodeData?.json?.data?.docusignAuthUrl && (
          <a href={nodeData?.json?.data?.docusignAuthUrl}>Authorize App</a>
        )}
        <code>{nodeData && JSON.stringify(nodeData, null, 2)}</code>
      </header>
    </div>
  );
}

export default App;
