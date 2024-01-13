import React from "react";

const Highlight = ({ icon, title, para }) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 class="highlight__subtitel">{title}</h3>
      <p class="highlight__para">
        {para}
      </p>
    </div>
  );
};

export default Highlight;
