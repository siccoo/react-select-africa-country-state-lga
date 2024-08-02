import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import data from '../data/data.json'

const lightTheme = {
  background: '#fff',
  color: '#000',
}

const darkTheme = {
  background: '#333',
  color: '#fff',
}

const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const Dropdown = styled.select`
  margin: 10px 0;
  padding: 5px;
`

const CountryInfoCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
`

export const App: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('')
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedState, setSelectedState] = useState<string>('')
  const [selectedLGA, setSelectedLGA] = useState<string>('')
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const regions = data.regions.map((region: { name: any }) => region.name)

  const countries =
    selectedRegion !== ''
      ? data.regions
          .find((region: { name: string }) => region.name === selectedRegion)
          ?.countries.map((country: { name: any }) => country.name) || []
      : []

  const countryInfo =
    selectedCountry !== ''
      ? data.regions
          .find((region: { name: string }) => region.name === selectedRegion)
          ?.countries.find((country: { name: string }) => country.name === selectedCountry) || null
      : null

  const states = countryInfo ? countryInfo.states.map((state: { name: any }) => state.name) : []

  const lgas = states.includes(selectedState)
    ? countryInfo?.states.find((state: { name: string }) => state.name === selectedState)?.lgas || []
    : []

  const handleThemeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <ToggleButton onClick={handleThemeToggle}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </ToggleButton>
        <Dropdown onChange={(e) => setSelectedRegion(e.target.value)} value={selectedRegion}>
          <option value='' disabled>
            Select Region
          </option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </Dropdown>
        {selectedRegion && (
          <Dropdown onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry}>
            <option value='' disabled>
              Select Country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Dropdown>
        )}
        {countryInfo && (
          <CountryInfoCard>
            <h2>{countryInfo.name}</h2>
            <p>Currency: {countryInfo.currency}</p>
            <p>Capital: {countryInfo.capital}</p>
            <p>Phone Code: {countryInfo.phoneCode}</p>
            <img src={`/flags/${countryInfo.flag}`} alt={`${countryInfo.name} flag`} />
            <p>ISO: {countryInfo.iso}</p>
          </CountryInfoCard>
        )}
        {selectedCountry && (
          <Dropdown onChange={(e) => setSelectedState(e.target.value)} value={selectedState}>
            <option value='' disabled>
              Select State
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Dropdown>
        )}
        {selectedState && (
          <Dropdown onChange={(e) => setSelectedLGA(e.target.value)} value={selectedLGA}>
            <option value='' disabled>
              Select LGA
            </option>
            {lgas.map((lga) => (
              <option key={lga} value={lga}>
                {lga}
              </option>
            ))}
          </Dropdown>
        )}
      </Container>
    </ThemeProvider>
  )
}
