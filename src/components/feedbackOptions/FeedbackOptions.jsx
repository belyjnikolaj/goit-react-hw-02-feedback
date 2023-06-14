import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ option, handleClickIncrement }) => {
    
    return (
        <li key={option} className={css["btn__item"]}>
            <button className={css["btn-incriment"]} onClick={() => handleClickIncrement(option)}>
                <span> {option} </span>
            </button>
        </li>
    );
}
FeedbackOptions.propTypes = {
      option: PropTypes.string.isRequired,
      handleClickIncrement: PropTypes.func.isRequired,      
};

export default FeedbackOptions;
