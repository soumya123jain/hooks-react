import React from "react";
import { render } from "react-dom";
import ComponentDemo from "react-component-demo";

function TestComponent({ backgroundColor, color, height }) {
  return (
    <div
      style={{
        backgroundColor,
        color,
        height,
        fontWeight: 800,
        fontSize: "80px"
      }}
    >
      React Component Demo
    </div>
  );
}

export default function CodeSnippet() {
  return (
    <ComponentDemo
      Component={TestComponent}
      name="TestComponent"
      props={{
        backgroundColor: "dodgerblue",
        color: "bisque",
        height: "500px"
      }}
      codeContainerStyle={{ width: "48%", float: "left" }}
      componentContainerStyle={{ width: "48%", float: "right" }}
    />
  );
}

// render(<DeCodeSnippet />, document.getElementById('app'));
