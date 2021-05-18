import React from "react";
import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  const onClick = () => {
    axios({
      url: decodeURIComponent(cellValue),
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "item.jpg");
      document.body.appendChild(link);
      link.click();
    });
  };

  return <button onClick={onClick}>다운</button>;
};
