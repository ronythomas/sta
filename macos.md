Create dir `~./asp.net/https`
Run the command below to install the development certificates
```console
dotnet dev-certs https --trust
dotnet dev-certs https -ep ${HOME}/.aspnet/https/sta.pfx -p certpassword
```

Create dir  `~/.microsoft/usersecrets`

Create file `secrets.json` and insert the following
```
{
  "Kestrel": {
    "Certificates": {
      "Default": {
        "Path": "/root/.aspnet/https/sta.pfx",  <---ROOT === your root folder
        "Password": certpassword
      }
    }
  }
}
```

Create a file named .env in the same dir where the docker compose configuration file is located and add
`APPDATA=/Users/YOUR_USER_NAME`

Create symbolic links
```console
ln -s ~/.aspnet ~/ASP.NET
ln -s ~/.aspnet/https ~/ASP.NET/Https
ln -s ~/.microsoft ~/Microsoft
ln -s ~/.microsoft/usersecrets ~/Microsoft/UserSecrets
```
