module.exports = {
    default: [
        "--require-module ts-node/register",
        "./tests/features/**/*.feature",
        "--require ./tests/steps/**/**/*.ts",
        "-f json:tests/test-results/cucumber-test.json",
        "--publish"
    ].join(" "),
};