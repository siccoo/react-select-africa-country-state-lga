import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  max-width: 300px;
`;

const FlagImage = styled.img`
  width: 50px;
  height: 30px;
`;

interface CountryInfoProps {
  name: string;
  currency: string;
  capital: string;
  phoneCode: string;
  flag: string;
  iso: string;
}

const CountryInfoCard: React.FC<CountryInfoProps> = ({
  name,
  currency,
  capital,
  phoneCode,
  flag,
  iso,
}) => (
  <Card>
    <h2>
      {name} <FlagImage src={`/flags/${flag}`} alt={`${name} flag`} />
    </h2>
    <p>
      <strong>Currency:</strong> {currency}
    </p>
    <p>
      <strong>Capital:</strong> {capital}
    </p>
    <p>
      <strong>Phone Code:</strong> {phoneCode}
    </p>
    <p>
      <strong>ISO Code:</strong> {iso}
    </p>
  </Card>
);

export default CountryInfoCard;
