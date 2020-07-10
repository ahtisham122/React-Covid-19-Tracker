import React, { useState, useEffect }  from 'react';
import fetchCountries from '../../Api/CountryPicker';
import { NativeSelect, FormControl } from '@material-ui/core';
import './CountryPicker.css';


const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className="countryPicker">
            <NativeSelect  defaulvalue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option padding-left='10px' value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;