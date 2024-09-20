import PropTypes from 'prop-types';
import styles from './TextButtonSmall.module.css';
import { Link } from "react-router-dom";

function TextButtonSmall({ buttonText, buttonLink, onClick }) {
    return (
        <Link to={`/${buttonLink}`} className="Link">
            <button className={styles.TextButton} onClick={onClick}>
                {buttonText}
            </button>
        </Link>
    );
}

TextButtonSmall.propTypes = {
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    onClick: PropTypes.func, // Accepts onClick prop for custom behavior
};

TextButtonSmall.defaultProps = {
    buttonText: "Placeholder Text",
    buttonLink: "",
    onClick: () => {}, // Default to no-op if no function is passed
};

export default TextButtonSmall;
