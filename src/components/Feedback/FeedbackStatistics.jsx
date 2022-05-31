// import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function FeedbackStatistics() {
    return (
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>Good: </li>
                <li>Neutral: </li>
                <li>Bad: </li>
                <li>Total: </li>
                <li>Positive feedback: %</li>
            </ul>
        </div>
    );
}

FeedbackStatistics.propTypes = {
  title: PropTypes.string,
};

export default FeedbackStatistics;