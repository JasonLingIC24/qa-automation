import { AcceptanceCriterion } from "./AcceptanceCriterion.js";
import { Scenario } from "./Scenario.js";

export interface TestSpecification {
  jiraKey: string;

  summary: string;

  objective?: string;

  acceptanceCriteria: AcceptanceCriterion[];

  scenarios: Scenario[];
}