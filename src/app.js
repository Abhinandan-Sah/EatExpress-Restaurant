import React from "react";
import ReactDom from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

// const heading = React.createElement("h1", {id:"heading"}, "I am Iron Man");

// Application Layout component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
