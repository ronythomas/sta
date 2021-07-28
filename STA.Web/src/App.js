import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import env from "./env";
import fetch from "node-fetch";
import http from "http";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!data) {
      const { api } = env();
      const httpsAgent = new http.Agent({
        rejectUnauthorized: false,
      });
      fetch(`${api}/test`, { method: "GET", agent: httpsAgent })
        .then(async (response) => {
          try {
            if (response.ok) {
              const txt = await response.text();
              console.log(txt);
              setData({ test: true, txt });
            } else {
              setData({ api, error: response.statusText });
            }
          } catch (err) {
            setData({ api, error: response.statusText });
            console.log(err);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>3M</p>

        <code>{data && JSON.stringify(data, null, 2)}</code>
        <code>{data && JSON.stringify(env(), null, 2)}</code>
      </header>
    </div>
  );
}

export default App;
