const local = require("./local");
const develop = require("./develop");
const staging = require("./staging");
const production = require("./production");
const envs = {
  local,
  develop,
  staging,
  production,
};

module.exports = (env) => envs[env || process.env.APP_ENV || "production"];
