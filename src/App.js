import React from 'react';
import './index.css';
//import the table-strucutre from index
import App from './index.js'
import companies from './companies';


class GitForm extends React.Component {
  //constructs the state of the class
  constructor(props) {
    super(props);
    this.state = {
      results: []
  };  
    this.getInfo = this.getInfo.bind(this);
  }
  //get data from data file(s)
  getInfo() {
    var data=[];
    console.log(companies, companies.comp001.title)
    for (const key of Object.keys(companies)) {
          data.push({
          name: companies[key].title,
          id: key
        });
    }

    console.log(data)
    this.setState({results: data})
  }
  //render the form
  render() {
    return (
      <div className="React-form">

      <img src="search.png" onClick={this.getInfo} alt="submit"/>

      <span id="table-container">
          <App changeSets={this.state.results} />
      </span>
    </div>
    );
  }
}

export default GitForm
