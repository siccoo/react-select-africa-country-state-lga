import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ReactSelectAfricaCountryStateLga } from 'react-select-africa-country-state-lga'

const App: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('')
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedState, setSelectedState] = useState<string>('')
  const [selectedLga, setSelectedLga] = useState<string>('')

  const regionChangedHandler = (val: string) => {
    console.log('Selected Region', val)
    setSelectedRegion(val)
  }

  const countryChangedHandler = (val: string) => {
    console.log('Selected Country', val)
    setSelectedCountry(val)
  }

  const stateChangedHandler = (val: string) => {
    console.log('Selected State', val)
    setSelectedState(val)
  }

  const lgaChangedHandler = (val: string) => {
    console.log('Selected LGA', val)
    setSelectedLga(val)
  }

  return (
    <React.StrictMode>
      <div>
        <h2>Select African Region, Country, State, and LGA</h2>
        <ReactSelectAfricaCountryStateLga
          region={selectedRegion}
          country={selectedCountry}
          state={selectedState}
          lga={selectedLga}
          setRegion={setSelectedRegion}
          setCountry={setSelectedCountry}
          setState={setSelectedState}
          setLga={setSelectedLga}
          regionVal={regionChangedHandler}
          countryVal={countryChangedHandler}
          stateVal={stateChangedHandler}
          lgaVal={lgaChangedHandler}
        />
      </div>
    </React.StrictMode>
  )
}

// Rendering the application
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)

export default App
