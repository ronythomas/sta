//Testable Domain based logic.
const axios = require("axios");

const docusign = () => {
  return 222;
};

const fetchAuth = () => {
  // TODO add dev switch
  const base_path = `https://account-d.docusign.com/oauth/auth`;
  // Fetch the token
  // const code = req.query.code;
  // Make a post request to get the auth code.
  const data = {
    code: req.query.code,
    grant_type: "authorization_code",
  };

  const clientString =
    process.env.DOCUSIGN_INTEGRATION + ":" + process.env.DOCUSIGN_SECRET;

  const config = {
    params: {
      scope: "authorization_code",
      client_id: process.env.DOCUSIGN_INTEGRATION,
      redirect_uri: `http://localhost`,
    },
    headers: {
      Authorization:
        "Basic " + new Buffer.from(clientString).toString("base64"),
      "Cache-Control": "no-store",
      Pragma: "no-cache",
    },
  };

  axios
    .get(`${base_path}/oauth/token`, config)
    .then((r) => {
      // console.log(`statusCode: ${r.status}`)
      // console.log('response returned!')
      // console.log(r)
      res.json({
        response: { ...r.data },
        token: { token: true, status: true },
      });
    })
    .catch((error) => {
      // console.log('error!')
      // console.error(error)
      res.json({
        response: { ...error.data },
        token: { token: false, status: false },
      });
    });
};

module.exports = { docusign };
