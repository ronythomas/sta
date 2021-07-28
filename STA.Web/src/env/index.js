import production from "./production.json";
import staging from "./staging.json";
import develop from "./develop.json";

const envs = {
  develop,
  staging,
  production,
};

const getEnv = (env) => envs[env || process.env.REACT_APP_ENV || "production"];
export default getEnv;
