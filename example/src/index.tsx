import React from "react";
import ReactDOM from "react-dom/client";
import {
  App,
  ToggleButton,
  Dropdown,
  CountryInfoCard,
} from "react-select-africa-country-state-lga";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <div>
      <h2>App Component</h2>
      <App />
    </div>
    <hr />
    <div>
      <h2>Toggle Button</h2>
      <ToggleButton />
    </div>
    <hr />
    <div>
      <h2>Dropdown</h2>
      <Dropdown />
    </div>
    <hr />
    <div>
      <h2>Country Info Card</h2>
      <CountryInfoCard />
    </div>
  </React.StrictMode>,
);
