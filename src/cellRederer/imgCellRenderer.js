import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  return (
    <>
      <a href={cellValue} target="_blank" rel="noreferrer">
        <img src={cellValue} width="50px" height="50px" alt="thumbnail" />
      </a>
    </>
  );
};
