// import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function FeedbackButtons() {
    return (
        <div>
            <h2>Please leave feedback</h2>
            <button type='button'>Good</button>
            <button type='button'>Neutral</button>
            <button type='button'>Bad</button>
        </div>
    );
}

FeedbackButtons.propTypes = {
  title: PropTypes.string,
};

export default FeedbackButtons;