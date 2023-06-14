import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ option, count }) => {

    return (
        <>
            <li key={option} className={css["statistics__item"]}>
                <p className={css["statistics__item-text"]}>
                    {option}: {count}
                </p>
            </li>
        </>
    )
}

Statistics.propTypes = {
    option: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,        
};

export default Statistics;