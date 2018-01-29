const getConfig = require("./getConfig");

module.exports = {
    NODE_ENV: '"production"',
    BASE_URL: `"${getConfig().baseURL}"`
};
