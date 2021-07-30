## API Request Using GQL 
```
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
```