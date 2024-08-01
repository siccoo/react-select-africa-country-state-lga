import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ToggleButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#333";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <Button onClick={toggleMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default ToggleButton;
