const core = require("@actions/core");

const metadata = {
  time: new Date().toTimeString(),
  scores: { performance: 85 },
};

core.setOutput("metadata", JSON.stringify(metadata));
