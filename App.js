const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello React from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);