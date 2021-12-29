import React from "react";

const Dialog = (props) => {
  return (
    <div class="dialog">
      <div class="dialog__heading">
        <h4 class="dialog__title">Recommendation</h4>
        <button class="dialog__close-btn">+</button>
      </div>
      <div class="dialog__content">
        <p>
          Use immutable array methods to work with data. It will help to avoid
          bugs
        </p>
      </div>
    </div>
  );
};
export default Dialog;
