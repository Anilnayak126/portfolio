import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div  >
      <p >
        {isReadMore ? `${text.slice(0, maxLength)}...` : text}
        <span 
          onClick={toggleReadMore}
          style={{ color: "black", cursor: "pointer" }}
        >
          {isReadMore ? " Read More" : " Show Less"}
        </span>
      </p>
    </div>
  );
};

export default ReadMore;
