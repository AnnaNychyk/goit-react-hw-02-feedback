import { Component } from "react";
import FeedbackButtons from "./FeedbackButtons";
import FeedbackStatistics from './FeedbackStatistics';


class Feedback extends Component {
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0,
    }

    render() {
        return (
            <div>
                <FeedbackButtons />
                <FeedbackStatistics />  
            </div>
        );
    }
}

export default Feedback;