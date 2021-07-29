**Required Env Variables**
when the app is in local mode, i.e. outside the container, dotenv looks for a file in the root of the project. (one level highter than STA.Node)

- COMPOSE_PROFILES= profile to use for the docker container
- DOCUSIGN_INTEGRATION= Integration key for docusign api
- DOCUSIGN_SECRET= secret created for app
- JWT_DECODE_KEY= key for coding/decoding jwt
