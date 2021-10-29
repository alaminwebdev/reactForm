import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./component/MainComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
