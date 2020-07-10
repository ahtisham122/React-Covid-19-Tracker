import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async (country) => {

    let ChangeableUrl = url;

    if(country) {
        ChangeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data } = await axios.get(ChangeableUrl);

        return {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
    } 
    
    catch (error) {

    }
}


export default fetchData;
