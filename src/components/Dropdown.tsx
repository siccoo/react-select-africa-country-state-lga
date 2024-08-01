import React from "react";
import styled from "styled-components";

const Select = styled.select`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`;

interface DropdownProps {
  options: string[];
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => (
  <Select onChange={(e) => onChange(e.target.value)}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </Select>
);

export default Dropdown;
