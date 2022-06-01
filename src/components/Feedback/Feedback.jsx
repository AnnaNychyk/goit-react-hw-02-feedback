import { Component } from "react";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleButtonClick = (event) => {
        const { name } = event.target;

        this.setState(prevState => ({[name]: prevState[name] + 1}));
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return good ? Math.floor((good / total) * 100) : 0;
    };

    render() {
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleButtonClick} />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() ? (<Statistics {...this.state} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />) : (<Notification message="There is no feedback" />)}
                </Section>
            </>
        );
    }
}

export default Feedback;