module.exports = {
  types: [
    { value: "feat", name: "feat" },
    { value: "fix", name: "fix" },
    { value: "refactor", name: "refactor" },
    { value: "perf", name: "perf" },
    {
      value: "style",
      name: "style",
    },
    { value: "docs", name: "docs" },
    { value: "test", name: "test" },
    {
      value: "chore",
      name: "chore",
    },
    { value: "revert", name: "revert" },
    { value: "ci", name: "ci" },
    { value: "build", name: "build" },
  ],
  scopes: [
    "component",
    "css-style",

    "custom-hook",
    "store",
    "util",
    "api",

    "assets",
    "package",

    "configuration",
    "husky",
    "workflow",

    "lint",
    "formatting",

    "README",
    "CHANGELOG",
  ],
  allowCustomScopes: true,
};
