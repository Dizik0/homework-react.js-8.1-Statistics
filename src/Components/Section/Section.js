import { useState } from "react";

import { Statistic } from "../Statistic";
import { FeadbackOption } from "../FeadbackOption";
import { Notification } from "../Notification";

export const Section = () => {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);

  const countTotalFeedback = () => Good + Neutral + Bad;

  const countPositiveFeedbackPercentage = () =>
    Math.trunc((Good * 100) / countTotalFeedback());

  const eventCather = (preview) => () => {
    switch (preview) {
      case "Good":
        setGood(Good + 1);
        break;
      case "Neutral":
        setNeutral(Neutral + 1);
        break;
      case "Bad":
        setBad(Bad + 1);
        break;

      default:
        console.log("error");
    }
  };

  return (
    <>
      <h1>Please leave feadback</h1>
      <FeadbackOption
        options={eventCather}
        btnOption={["Good", "Neutral", "Bad"]}
      />
      {countTotalFeedback() !== 0 ? (
        <Statistic
          statistic={{ Good, Neutral, Bad }}
          total={countTotalFeedback()}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message={"No feedback given"}></Notification>
      )}
    </>
  );
};
