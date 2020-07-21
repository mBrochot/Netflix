import React from "react";

const Section = ({ data }) => {
  return (
    <>
      <div className="section">
        <h2>{data.category}</h2>
        <div className="movies">
          {data.images.map((image, index) => {
            return (
              <>
                <img src={image} alt={index} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
