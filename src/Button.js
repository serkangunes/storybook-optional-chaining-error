import React from "react";

export const Button = props => {
  return (
    <div style={{ padding: 5, border: "2px solid red" }}>
      This is a button name: {props?.person?.name || "none"}
    </div>
  );
};
