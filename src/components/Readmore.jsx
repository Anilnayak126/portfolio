import React, { useState } from "react";
import './ReadMore.css'; // Import the CSS file for styling

const ReadMore = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const toggleReadMore = () => {
    if (isReadMore) {
      // Start fade-out before setting read more to false
      setIsFading(true);
      setTimeout(() => {
        setIsReadMore(false);
        setIsFading(false);
      }, 500); // Matches the duration in CSS
    } else {
      setIsReadMore(true);
    }
  };

  return (
    <div>
      <p className={`read-more-text ${isFading ? 'fade-out' : (isReadMore ? 'fade-in' : '')}`}>
        {isReadMore ? `${text.slice(0, maxLength)}...` : text}
        <span
          onClick={toggleReadMore}
          style={{ color: "black", cursor: "pointer", marginLeft: "5px" }}
        >
          {isReadMore ? " Read More" : " Show Less"}
        </span>
      </p>
    </div>
  );
};

export default ReadMore;
