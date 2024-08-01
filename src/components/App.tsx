import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import Dropdown from "./Dropdown";
import CountryInfoCard from "./CountryInfoCard";
import data from "../data/data.json";

const App: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedLGA, setSelectedLGA] = useState<string>("");

  const regions = data.regions.map((region: { name: any }) => region.name);

  const countries =
    selectedRegion !== ""
      ? data.regions
          .find((region: { name: string }) => region.name === selectedRegion)
          ?.countries.map((country: { name: any }) => country.name) || []
      : [];

  const countryInfo =
    selectedCountry !== ""
      ? data.regions
          .find((region: { name: string }) => region.name === selectedRegion)
          ?.countries.find(
            (country: { name: string }) => country.name === selectedCountry,
          ) || null
      : null;

  const states = countryInfo
    ? countryInfo.states.map((state: { name: any }) => state.name)
    : [];

  const lgas = states.includes(selectedState)
    ? countryInfo?.states.find(
        (state: { name: string }) => state.name === selectedState,
      )?.lgas || []
    : [];

  return (
    <div>
      <ToggleButton />
      <Dropdown
        options={regions}
        onChange={(value: React.SetStateAction<string>) =>
          setSelectedRegion(value)
        }
      />
      {selectedRegion && (
        <Dropdown
          options={countries}
          onChange={(value: React.SetStateAction<string>) =>
            setSelectedCountry(value)
          }
        />
      )}
      {countryInfo && <CountryInfoCard {...countryInfo} />}
      {selectedCountry && (
        <Dropdown
          options={states}
          onChange={(value: React.SetStateAction<string>) =>
            setSelectedState(value)
          }
        />
      )}
      {selectedState && (
        <Dropdown
          options={lgas}
          onChange={(value: React.SetStateAction<string>) =>
            setSelectedLGA(value)
          }
        />
      )}
    </div>
  );
};

export default App;
