import React from "react";

function App() {
  var isDone = true;
  const strickThrough = { textDecoration: "line-through" };
  return <p style={isDone ? strickThrough : null}>Buy Milk</p>;
}

export default App;
