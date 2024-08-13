/// <reference types="@rsbuild/core/types" />

import React from 'react'
import styles from './styles.module.css'
import data from './data'

interface ReactSelectAfricaCountryStateLgaProps {
  region: string
  country: string
  state: string
  lga: string
  setRegion: (region: string) => void
  setCountry: (country: string) => void
  setState: (state: string) => void
  setLga: (lga: string) => void
  regionVal: (region: string) => void
  countryVal: (country: string) => void
  stateVal: (state: string) => void
  lgaVal: (lga: string) => void
  regionClassName?: string
  countryClassName?: string
  stateClassName?: string
  lgaClassName?: string
  regionPlaceholder?: string
  countryPlaceholder?: string
  statePlaceholder?: string
  lgaPlaceholder?: string
}

export const ReactSelectAfricaCountryStateLga: React.FC<ReactSelectAfricaCountryStateLgaProps> = (props) => {
  const regionList = data.regions.map((region) => ({
    name: region.name,
  }))

  const countryList = props.region ? data.regions.find((r) => r.name === props.region)?.countries || [] : []

  const stateList = props.country ? countryList.find((c) => c.name === props.country)?.states || [] : []

  const lgaList = props.state ? stateList.find((s) => s.name === props.state)?.lgas || [] : []

  const handleRegionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    props.regionVal(region)
    props.setRegion(region)
    props.setCountry('')
    props.setState('')
    props.setLga('')
  }

  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value
    props.countryVal(country)
    props.setCountry(country)
    props.setState('')
    props.setLga('')
  }

  const handleStateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value
    props.stateVal(state)
    props.setState(state)
    props.setLga('')
  }

  const handleLgaSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lga = e.target.value
    props.lgaVal(lga)
    props.setLga(lga)
  }

  return (
    <div>
      <select onChange={handleRegionSelect} className={props.regionClassName || styles.test} value={props.region}>
        <option value=''>{props.regionPlaceholder || 'Select Region'}</option>
        {regionList.map((region, key) => (
          <option key={key} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
      <select onChange={handleCountrySelect} className={props.countryClassName || styles.test} value={props.country}>
        <option value=''>{props.countryPlaceholder || 'Select Country'}</option>
        {countryList.map((country, key) => (
          <option key={key} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <select onChange={handleStateSelect} className={props.stateClassName || styles.test} value={props.state}>
        <option value=''>{props.statePlaceholder || 'Select State'}</option>
        {stateList.map((state, key) => (
          <option key={key} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      <select onChange={handleLgaSelect} className={props.lgaClassName || styles.test} value={props.lga}>
        <option value=''>{props.lgaPlaceholder || 'Select LGA'}</option>
        {lgaList.map((lga, key) => (
          <option key={key} value={lga}>
            {lga}
          </option>
        ))}
      </select>
    </div>
  )
}
