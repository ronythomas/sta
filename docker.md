## Docker container setup

### .env File

In the root of the project. i.e. the folder that the docker-compose.yml file resides in, create a `.env` file. This should contain a `COMPOSE_PROFILES=develop` line.

**COMPOSE_PROFILES**

- production
- - Builds the react app and hosts it via nginx server with prod env settings
- staging
- - Builds the react app and hosts it via nginx server with stage env settings
- develop
- - Runs the dev version of CRA and uses the dev env sttings
