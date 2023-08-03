
import PropTypes from "prop-types"; // Import PropTypes

import Icons from "assets/svg/sprite.svg";

export const Icon = ({ id, height, width, alt }) => {
  return (
    <svg width={width} height={height} alt={alt}>
      <use href={Icons + `#${id}`} />
    </svg>
  );
};

// Add prop validation for 'height' prop
Icon.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};
