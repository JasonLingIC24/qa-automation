import { ScenarioCategory } from "./ScenarioCategory.js";

export interface Scenario {
  id: string;

  title: string;

  category: ScenarioCategory;

  given: string[];

  when: string[];

  then: string[];

  automationStatus:
    | "MANUAL"
    | "AUTOMATED"
    | "PARTIAL";

  jiraKey?: string;

  tags?: string[];
}