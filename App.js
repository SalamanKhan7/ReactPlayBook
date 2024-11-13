import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello React from React"
);

/** JSX **/
const title = <h1>React from JSX</h1>; //title is a object and work as title
/**
 * component composition
 */
const HeadingCom = () => {
  return <h2>{title}react from component function</h2>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
/**react dom work as a bridge between react and browser */
// root.render(heading);
// root.render(title);
// root.render(HeadingCom());
root.render(<HeadingCom />);
