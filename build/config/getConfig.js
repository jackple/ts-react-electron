const fs = require("fs-plus");
const path = require("path");

const getConfig = function() {
    const env = process.env.NODE_ENV || "development";
    const def = JSON.parse(
        fs.readFileSync(path.join(__dirname, "default.json"), "utf-8")
    );
    return def[env];
};

module.exports = getConfig;
