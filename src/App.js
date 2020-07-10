import React from 'react';
import './App.css';

// Import Components
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Header from './Header';

import fetchData from './Api/index';


class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount()  {
    const Data = await fetchData();
    
    this.setState({ data: Data })
  }

  handleCountryChange = async (country) => {
    const Data = await (fetchData(country))
    
    
    this.setState({ data: Data, country: country })
  }

  render() {

    

    return (
      <div className="container">
        <Header />
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
  
}

export default App;
