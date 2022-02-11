import PropTypes from "prop-types";
import React from "react";

export const Button = ({ backgroundColor, size, mode, label, ...props }) => {
  return (
    <button title={label} className={["btn-nl", `btn-nl--${size}`, `btn-nl--${mode}`].join(" ")} style={backgroundColor && { backgroundColor }} {...props}>
      <span className="btn-nl_in">
        <span className="btn-nl_text">
          <span className="text-show">{label}</span>
          <span className="text-hidden">{label}</span>
        </span>
      </span>
    </button>
  );
};

// Controls
Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

// Default
Button.defaultProps = {
  size: "md",
  backgroundColor: null,
  onClick: undefined,
};
