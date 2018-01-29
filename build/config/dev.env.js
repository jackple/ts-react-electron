const getConfig = require("./getConfig");

module.exports = {
    NODE_ENV: '"development"',
    BASE_URL: `"${getConfig().baseURL}"`
};
