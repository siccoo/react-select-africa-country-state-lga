import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ReactSelectAfricaCountryStateLga } from './ReactSelectAfricaCountryStateLga'

// Mock data for the test
const mockData = {
  regions: [
    {
      name: 'Region1',
      countries: [
        {
          name: 'Country1',
          states: [
            {
              name: 'State1',
              lgas: ['LGA1', 'LGA2'],
            },
          ],
        },
      ],
    },
  ],
}

// Replace the imported data with the mock data for testing
jest.mock('./data', () => mockData)

describe('ReactSelectAfricaCountryStateLga', () => {
  const setRegion = jest.fn()
  const setCountry = jest.fn()
  const setState = jest.fn()
  const setLga = jest.fn()
  const regionVal = jest.fn()
  const countryVal = jest.fn()
  const stateVal = jest.fn()
  const lgaVal = jest.fn()

  beforeEach(() => {
    render(
      <ReactSelectAfricaCountryStateLga
        region=''
        country=''
        state=''
        lga=''
        setRegion={setRegion}
        setCountry={setCountry}
        setState={setState}
        setLga={setLga}
        regionVal={regionVal}
        countryVal={countryVal}
        stateVal={stateVal}
        lgaVal={lgaVal}
      />,
    )
  })

  test('renders all select elements with placeholders', () => {
    expect(screen.getByPlaceholderText('Select Region')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Select Country')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Select State')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Select LGA')).toBeInTheDocument()
  })

  test('selecting a region updates the region state', () => {
    fireEvent.change(screen.getByPlaceholderText('Select Region'), { target: { value: 'Region1' } })
    expect(setRegion).toHaveBeenCalledWith('Region1')
    expect(setCountry).toHaveBeenCalledWith('')
    expect(setState).toHaveBeenCalledWith('')
    expect(setLga).toHaveBeenCalledWith('')
  })

  test('selecting a country updates the country state', () => {
    fireEvent.change(screen.getByPlaceholderText('Select Region'), { target: { value: 'Region1' } })
    fireEvent.change(screen.getByPlaceholderText('Select Country'), { target: { value: 'Country1' } })
    expect(setCountry).toHaveBeenCalledWith('Country1')
    expect(setState).toHaveBeenCalledWith('')
    expect(setLga).toHaveBeenCalledWith('')
  })

  test('selecting a state updates the state state', () => {
    fireEvent.change(screen.getByPlaceholderText('Select Region'), { target: { value: 'Region1' } })
    fireEvent.change(screen.getByPlaceholderText('Select Country'), { target: { value: 'Country1' } })
    fireEvent.change(screen.getByPlaceholderText('Select State'), { target: { value: 'State1' } })
    expect(setState).toHaveBeenCalledWith('State1')
    expect(setLga).toHaveBeenCalledWith('')
  })

  test('selecting an LGA updates the LGA state', () => {
    fireEvent.change(screen.getByPlaceholderText('Select Region'), { target: { value: 'Region1' } })
    fireEvent.change(screen.getByPlaceholderText('Select Country'), { target: { value: 'Country1' } })
    fireEvent.change(screen.getByPlaceholderText('Select State'), { target: { value: 'State1' } })
    fireEvent.change(screen.getByPlaceholderText('Select LGA'), { target: { value: 'LGA1' } })
    expect(setLga).toHaveBeenCalledWith('LGA1')
  })
})
