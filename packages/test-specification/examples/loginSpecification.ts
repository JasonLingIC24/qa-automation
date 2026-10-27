import type { TestSpecification }
  from "../src/index.js";

export const loginSpecification: TestSpecification = {
  jiraKey: "EVA-418",

  summary: "User can login with valid credentials",

  acceptanceCriteria: [
    {
      id: "AC-1",
      text: "The user can login using valid credentials"
    }
  ],

  scenarios: [
    {
      id: "TC-001",

      title: "Login using valid credentials",

      category: "HAPPY_PATH",

      given: [
        "I am on the login page"
      ],

      when: [
        "I enter valid credentials"
      ],

      then: [
        "I am logged in successfully"
      ],

      automationStatus: "MANUAL"
    }
  ]
};