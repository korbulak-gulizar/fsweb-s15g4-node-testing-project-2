const axios = require("axios");
const fs = require("fs");
const path = require("path");

const resultsFile = path.join(__dirname, "testResults.json");
const userFile = path.join(__dirname, "user.json");

async function sendResults() {
  try {
    if (!fs.existsSync(resultsFile)) {
      console.error("testResults.json not found. Run tests first.");
      return;
    }

    if (!fs.existsSync(userFile)) {
      console.error("user.json not found.");
      return;
    }

    const results = JSON.parse(fs.readFileSync(resultsFile, "utf8"));
    const user = JSON.parse(fs.readFileSync(userFile, "utf8"));

    const payload = {
      user_id: user.user_id,
      cohort: user.cohort,
      name: user.name,
      results,
    };

    const response = await axios.post(
      "https://nextgen.workintech.com/api/codegrade/send",
      payload
    );

    console.log("Results successfully sent to CodeGrade!");
  } catch (err) {
    console.error("Error sending results:", err.message);
  }
}

sendResults();
