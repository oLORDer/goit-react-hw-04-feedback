import Feedback from './Feedback/Feedback';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveVote = ({ target }) => {
    const { name } = target;

    if (name === 'good') {
      setGood(ps => (ps += 1));
      return;
    }

    if (name === 'neutral') {
      setNeutral(ps => (ps += 1));
      return;
    }

    if (name === 'bad') {
      setBad(ps => (ps += 1));
      return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = (100 / total) * good;
    return Number(result.toFixed(2));
  };

  return (
    <Feedback
      state={{ good, neutral, bad }}
      leaveVote={leaveVote}
      countTotalFeedback={countTotalFeedback()}
      countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
    />
  );
}
