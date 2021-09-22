import React from "react";

import "./ScrollButtons.scss";

interface Props {
  next: () => void;
  prev: () => void;
  first: () => void;
}

const ScrollButtons = ({ next, prev, first }: Props) => {
  return (
    <>
      <div className="button-container">
        <button className="button" onClick={prev}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
      <div className="first-button-container">
        <button className="button" onClick={first}>
          First Page
        </button>
      </div>
    </>
  );
};

export default ScrollButtons;
