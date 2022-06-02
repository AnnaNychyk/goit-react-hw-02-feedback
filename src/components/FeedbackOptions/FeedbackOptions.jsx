import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
      <div className={styles.btn}>
          {options.map((option, index) => <button className={styles.btnItem} key={index} name={option} onClick={onLeaveFeedback}>{option}</button>)}
      </div>
  );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
