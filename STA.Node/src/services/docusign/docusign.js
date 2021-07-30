const env = require("@env");
const docusign = () => {
  return 222;
};

const fetchAuthUrl = () => {
  // TODO add dev switch
  console.log(env());
  const {
    docusign: { auth, redirectUrl },
  } = env();
  const base_path = env().docusign.auth;
  // The state parameter shown in the syntax example is optional.
  // It enables you to enter a string of arbitrary data that will be returned to your redirect URI.
  // You can use state to protect against cross-site request forgery (CSRF) attacks by ensuring that
  // the returned state matches your specified state.

  const params = {
    response_type: "code",
    scope: encodeURI(`signature impersonation`),
    client_id: process.env.DOCUSIGN_INTEGRATION,
    redirect_uri: redirectUrl,
    state: encodeURI(`some key we can define see above`),
  };

  // create get param string
  const paramStr = Object.keys(params).reduce((a, c, i) => {
    if (i === 0) return `${a}${c}=${params[c]}`;
    return `${a}&${c}=${params[c]}`;
  }, "?");

  const authWithKeys = `${base_path}${paramStr}`;
  return authWithKeys;
};

module.exports = { docusign, fetchAuthUrl };
