const nextJest = require("next/jest")();
require("dotenv").config({ path: ".env.development" });

const jestConfig = nextJest({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
