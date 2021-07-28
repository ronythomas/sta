import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import env from "./env";
import fetch from "node-fetch";
import https from "https";
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!data) {
      const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
      const { api } = env();
      fetch("https://localhost:5003/test", {
        method: "GET",
        mode: "no-cors",
        agent: httpsAgent      
      })
        .then(async (response) => {
          try {
            console.log(response);
            const txt = await response.text();

            console.log(txt);
            setData({
              test: true,
              txt,
              statusText: response.statusText,
              code: response.status,
            });
          } catch (err) {
            setData({ api, error: err.message });
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
